# coding: utf-8
from flask import render_template, abort
from app import app
import controllers
from pprint import pprint


@app.route('/')
def index():
    user = {'nickname': 'Miguel'}  # fake user
    posts = [  # fake array of posts
        {
            'author': {'nickname': 'John'},
            'body': 'Beautiful day in Portland!'
        },
        {
            'author': {'nickname': 'Susan'},
            'body': 'The Avengers movie was so cool!'
        }
    ]
    context = {
        'title': 'Home',
        'user': user,
        'posts': posts,
    }
    return render_template("index.html", **context)


@app.route('/journals')
def collection_list_alpha():
    journals = controllers.get_journals_by_collection_alpha('esp')
    context = {
        'journals': journals['objects'],
        'meta': journals['meta']
    }
    return render_template("collection/list_alpha.html", **context)


@app.route('/journals/theme')
def collection_list_theme():
    context = controllers.get_journals_by_collection_theme('esp')

    return render_template("collection/list_theme.html", **context)


@app.route('/journals/<journal_id>')
def journal_detail(journal_id):

    journal = controllers.get_journal_by_jid(journal_id)
    if not journal:
        abort(404, 'Journal not found')

    context = {
        'journal': journal,
    }
    return render_template("journal/detail.html", **context)


@app.route('/issues')
def issue_list():
    context = {}
    return render_template("issue/list.html", **context)


@app.route('/issues/<issue_id>')
def issue_detail(issue_id):
    context = {
        'issue_id': issue_id,
    }
    return render_template("issue/detail.html", **context)


@app.route('/articles')
def article_list():
    context = {}
    return render_template("article/list.html", **context)


@app.route('/articles/<article_id>')
def article_detail(article_id):
    context = {
        'article_id': article_id,
    }
    return render_template("article/detail.html", **context)
