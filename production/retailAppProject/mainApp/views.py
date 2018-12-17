from django.views.generic import TemplateView

# Create your views here.


class MainAppView(TemplateView):
    template_name = "index.html"
