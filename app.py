from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")   # root URL
def home():
    return render_template("index.html")   # Flask will look in /templates/

if __name__ == "__main__":
    app.run(debug=True)   # runs on http://127.0.0.1:5000
