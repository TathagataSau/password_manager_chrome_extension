# -*- coding: utf-8 -*-
"""
Created on Thu Jul 20 18:57:52 2023

@author: Tathagata Sau
"""

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Replace this with a secure method of storing passwords
passwords = {}


@app.route('/save', methods=['POST'])
def save_password():
    data = request.get_json()
    username = data['username']
    password = data['password']

    # Store the password securely (e.g., using encryption)
    passwords[username] = password

    return jsonify({"message": "Password saved successfully"})


@app.route('/fetch/<username>', methods=['GET'])
def fetch_password(username):
    # Retrieve the password securely (e.g., using decryption)
    password = passwords.get(username, None)

    if password is not None:
        return jsonify({"password": password})
    else:
        return jsonify({"message": "Password not found"})


if __name__ == '__main__':
    app.run(debug=True)
