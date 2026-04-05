# Import the generic Tool wrapper from LangChain
from langchain.tools import tool
import pandas as pd

# Standard libraries for scraping and saving
from datetime import datetime

# Define the tool
@tool(description="Get the current weather in a given location")
def get_weather(location: str) -> str:
    return "It's sunny."
