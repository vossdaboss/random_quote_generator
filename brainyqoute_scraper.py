import random
import re
import requests
from bs4 import BeautifulSoup
from math import ceil

def quotes(category):
    url = f"https://www.brainyquote.com/topics/{category}-quotes"
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")
    quotes_list = soup.find_all("a", {"title": "view quote"})
    quotes_list = [quote.get_text() for quote in quotes_list]
    return quotes_list