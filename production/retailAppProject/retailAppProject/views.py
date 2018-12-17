from django.shortcuts import render


def handler404(request):
    return render(request, 'index.html', status=404)


def handler500(request):
    return render(request, 'index.html', status=500)
