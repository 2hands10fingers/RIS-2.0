
from flask import render_template
from app import app

@app.route('/')
@app.route('/index')

def index():

    urls = read_urls()

    return render_template('index.html', urls=urls)

def read_urls():

    with open('app/urls.txt', 'r') as url_file:

        urls = list()
        row_index = 0

        data = url_file.readlines()
        row_list = list()

        for line in data:
            row_list.append(line.strip())
            row_index += 1
            if row_index > 5:
                urls.append(row_list)
                row_index = 0
                row_list = list()

        return urls
