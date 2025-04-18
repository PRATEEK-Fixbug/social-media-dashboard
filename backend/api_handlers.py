# backend/api_handlers.py

def fetch_metrics():
    return {
        'twitter': {
            'followers': 1200,
            'tweets': 540,
        },
        'youtube': {
            'subscribers': 850,
            'views': 10000,
        },
        'instagram': {
            'followers': 1300,
            'posts': 320,
        }
    }
