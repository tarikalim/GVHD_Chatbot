import subprocess


def process_query(data):
    try:
        query = data.get("request")
        response = send_to_graphrag(query)
        return {"response": response}, 200
    except Exception as e:
        return {"error": str(e)}, 500


def send_to_graphrag(query):
    result = subprocess.run(
        ["graphrag", "query", "--root", "../chatbot", "--method", "local", "--query", query],
        capture_output=True,
        text=True,
        encoding="utf-8"
    )

    if result.returncode != 0:
        raise Exception("Err: " + result.stderr)

    return result.stdout.strip()
