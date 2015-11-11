# coding: utf-8
from flask import render_template, abort
from app import app
import controllers
from pprint import pprint
from collections import OrderedDict


@app.route('/')
def index():
    context = {
        'title': 'Home'
    }
    return render_template("collection/index.html", **context)


@app.route('/journals')
def collection_list_alpha():
    journals = controllers.get_journals_by_collection_alpha('esp')
    context = {
        'journals': journals,
    }
    return render_template("collection/list_alpha.html", **context)


@app.route('/journals/theme')
def collection_list_theme():
    objects_by_area = controllers.get_journals_by_collection_theme('esp')
    objects_by_indexed = controllers.get_journals_by_collection_indexed('esp')

    context = {
        'objects_by_area': objects_by_area,
        'objects_by_indexed': objects_by_indexed
    }

    return render_template("collection/list_theme.html", **context)


@app.route('/journals/institution')
def collection_list_institution():
    context = controllers.get_journals_by_collection_institution('esp')

    return render_template("collection/list_institution.html", **context)


@app.route('/journals/<string:journal_id>')
def journal_detail(journal_id):

    journal = controllers.get_journal_by_jid(journal_id)
    latest_issues = controllers.get_issues_by_jid(journal_id, page_size=1)
    if latest_issues:
        latest_issue = latest_issues[0]
    else:
        latest_issue = None

    if not journal:
        abort(404, 'Journal not found')

    context = {
        'journal': journal,
        'latest_issue': latest_issue,
    }
    return render_template("journal/detail.html", **context)


@app.route('/journals/<string:journal_id>/issues')
def issue_grid(journal_id):

    journal = controllers.get_journal_by_jid(journal_id)

    if not journal:
        abort(404, 'Journal not found')

    issues = controllers.get_issues_by_jid(journal_id)

    result_dict = OrderedDict()
    for issue in issues:
        key_year = str(issue.year)
        key_volume = str(issue.volume)
        result_dict.setdefault(key_year, OrderedDict())
        result_dict[key_year].setdefault(key_volume, []).append(issue)

    context = {
        'journal': journal,
        'result_dict': result_dict,
    }
    return render_template("issue/grid.html", **context)


@app.route('/issues/<string:issue_id>')
def issue_toc(issue_id):
    issue = controllers.get_issue_by_iid(issue_id)
    journal = controllers.get_journal_by_jid(issue.journal_jid)
    articles = controllers.get_articles_by_iid(issue.iid)

    context = {'journal': journal,
               'issue': issue,
               'articles': articles}

    return render_template("issue/toc.html", **context)


@app.route('/articles/<string:article_id>')
def article_detail(article_id):
    article = controllers.get_article_by_aid(article_id)
    journal = controllers.get_journal_by_jid(article.journal_jid)
    context = {
        'article': article,
        'journal': journal
    }
    return render_template("article/detail.html", **context)


@app.route('/articles/html/<string:article_id>')
def article_html_by_aid(article_id):
    article = controllers.get_article_by_aid(article_id)

    article_html = article.htmls[0].source

    return article_html


@app.route('/abstract/<string:article_id>')
def abstract_detail(article_id):
    article = controllers.get_article_by_aid(article_id)
    journal = controllers.get_journal_by_jid(article.journal_jid)
    context = {
        'article': article,
        'journal': journal
    }
    return render_template("article/abstract.html", **context)
