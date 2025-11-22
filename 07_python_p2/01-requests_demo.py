import requests

r = requests.get('https://randomuser.me/api/')
print(r.status_code)
print(r.json())