from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pandas as pd
import os
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

@csrf_exempt
def resumeUpload(request):
    if request.method == 'POST':
        try:
            parsed_content = json.loads(request.body.decode('utf-8')).get('parsedContent')
            current_directory = os.path.dirname(__file__)
            csv_file_path = os.path.join(current_directory, 'Dataset.csv')
            df = pd.read_csv(csv_file_path)
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