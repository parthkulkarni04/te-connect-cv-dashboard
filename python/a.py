import sys
import json
import google.generativeai as genai

def main(job_title, job_description):
    try:
        # Configure the model
        genai.configure(api_key="PUT KEY HEREEEEEEEEEEEE REMOVED FOR SECURITY REASONS")
        model = genai.GenerativeModel("gemini-1.5-pro")
        
        # Generate content
        response = model.generate_content(f"""
        Create 10 interview questions and answers for this job:
        Title: {job_title}
        Description: {job_description}
        """)
        
        # Format the response
        result = {
            "job_title": job_title,
            "questions": [
                {"question": "Sample Q1", "answer": "Sample A1"},
                {"question": "Sample Q2", "answer": "Sample A2"}
                # ... generate actual questions here
            ]
        }
        
        # Print as JSON
        print(json.dumps(result))
        
    except Exception as e:
        print(json.dumps({"error": str(e)}))
        sys.exit(1)

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print(json.dumps({"error": "Missing arguments"}))
        sys.exit(1)
    
    main(sys.argv[1], sys.argv[2])
