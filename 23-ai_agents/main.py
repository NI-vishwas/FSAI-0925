import getpass
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from langchain.messages import HumanMessage

# from tools import converter, extracter, save_tool
from tools import get_weather
# Pulling our Gemini API key from our .env file.
load_dotenv()
print("Loaded Environment......")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
print("Got GOOGLE_API_KEY")
if "GOOGLE_API_KEY" not in os.environ:
    os.environ["GOOGLE_API_KEY"] = getpass.getpass("Enter your Google AI API key: ")

print("Creating the model......")
# Initialize and bind (potentially multiple) tools to the model
model_with_tools = ChatGoogleGenerativeAI(model="gemini-2.5-flash").bind_tools([get_weather])

# Step 1: Model generates tool calls
messages = [HumanMessage("What's the weather in Boston?")]
ai_msg = model_with_tools.invoke(messages)
messages.append(ai_msg)

# Check the tool calls in the response
print(ai_msg.tool_calls)

# Step 2: Execute tools and collect results
for tool_call in ai_msg.tool_calls:
    # Execute the tool with the generated arguments
    tool_result = get_weather.invoke(tool_call)
    messages.append(tool_result)

# Step 3: Pass results back to model for final response
final_response = model_with_tools.invoke(messages)
final_response

print('Model Creation complete..')