from elasticsearch_dsl import Search, Q
from elasticsearch_dsl.connections import connections
from app import app
import json

# ES_HOSTS = ['127.0.0.1', ]
ES_HOSTS = ['192.168.169.156', ]
INDEX = 'iopac3'
connections.create_connection(hosts=ES_HOSTS)


def get_journals_by_collection(collection_acronym, page_from=0, page_size=1000):

    search = Search(index=INDEX).query(
            "nested",
            path="collections",
            query=Q("match", collections__acronym=collection_acronym)).sort('title')
    search = search[page_from:page_size]
    search_response = search.execute()

    meta = {
        'total': search_response.hits.total,
    }

    journals = []
    for journal in search_response:
        issues = get_issues_by_jid(journal.jid, page_size=1)
        journals.append({
            'jid': journal.jid,
            'title': journal.title,
            'current_status': journal.current_status,
            'latest_issue': issues[0],
            'issues_count': issues.hits.total
        })

    result = {
        'meta': meta,
        'objects': journals
    }
    return result


def get_issues_by_jid(jid, page_from=0, page_size=1000, sort=["-year", "-volume", "-number"]):

    search = Search(index=INDEX).query(
                    "match",
                    journal_jid=jid).sort(*sort)

    search = search[page_from:page_size]
    search_response = search.execute()

    if search_response.success() and search_response.hits.total > 0:
        return search_response
    else:
        return None


def get_journal_by_jid(jid, page_from=0, page_size=1000):

    search = Search(index=INDEX).query("term", jid=jid)
    search = search[page_from:page_size]
    search_response = search.execute()
    if search_response.success() and search_response.hits.total > 0:
        journal = search_response[0]
        return journal
    else:
        return None
