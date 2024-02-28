from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pandas as pd
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import re
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

nltk.download('stopwords')
nltk.download('punkt')

@csrf_exempt
def resumeUpload(request):
    if request.method == 'POST':
        try:
            parsed_content = json.loads(request.body.decode('utf-8')).get('parsedContent')
            parsed_content = cleanResume(parsed_content)
            parsed_content = remove_stopwords(parsed_content)
            current_directory = os.path.dirname(__file__)
            csv_file_path = os.path.join(current_directory, 'Dataset.csv')
            df = pd.read_csv(csv_file_path)
            df['Resume'] = df['Resume'].apply(lambda x: cleanResume(x))
            df['Resume'] = df['Resume'].apply(remove_stopwords)
            all_descriptions = df['Resume'].tolist() + [parsed_content]
            vectorizer = TfidfVectorizer(stop_words='english')
            tfidf_matrix = vectorizer.fit_transform(all_descriptions)
            cosine_similarities = cosine_similarity(tfidf_matrix[-1], tfidf_matrix[:-1]).flatten()
            result_df = pd.DataFrame({'Category': df['Category'], 'Similarity_Score': cosine_similarities})
            result_df = result_df.groupby('Category')['Similarity_Score'].max().reset_index()
            result_df = result_df.sort_values(by='Similarity_Score', ascending=False)
            result_json = result_df.to_json(orient='records')
            return JsonResponse({'message': 'Hello, World!', 'result': result_json})
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON in the request body'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid HTTP method'}, status=405)

def cleanResume(txt):
    cleanText = re.sub('http\S+\s', ' ', txt)
    cleanText = re.sub('RT|cc', ' ', cleanText)
    cleanText = re.sub('#\S+\s', ' ', cleanText)
    cleanText = re.sub('@\S+', '  ', cleanText)  
    cleanText = re.sub('[%s]' % re.escape("""!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"""), ' ', cleanText)
    cleanText = re.sub(r'[^\x00-\x7f]', ' ', cleanText) 
    cleanText = re.sub('\s+', ' ', cleanText)
    return cleanText

def remove_stopwords(text):
    stop_words = set(stopwords.words('english'))
    word_tokens = word_tokenize(text)
    filtered_text = [word for word in word_tokens if word.lower() not in stop_words]
    return ' '.join(filtered_text)