from .models import TipoProducto
from django.forms import ModelForm

class TipoProductoForm(ModelForm):
    class Meta:
        model = TipoProducto
        fields = ["TipoProductos",]
        labels = {"TipoProductos":"TipoProducto",}

