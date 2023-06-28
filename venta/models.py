from django.db import models

# Create your models here.

class TipoProducto(models.Model):
    id_tipoProducto = models.AutoField(db_column='idTipoProducto', primary_key=True)
    TipoProductos = models.CharField(max_length=20, blank=False, null=False)

    def __str__(self):
        return str(self.TipoProductos)
    
class Productos(models.Model):
    nroSerie = models.CharField(primary_key=True, max_length=10)
    nombreProducto = models.CharField(max_length=20)
    cantidadProducto = models.CharField(max_length=20)
    precioProducto = models.CharField(max_length=20, default="")
    descProducto = models.CharField(max_length=60, default="")
    id_tipoProducto = models.ForeignKey('TipoProducto',on_delete=models.CASCADE, db_column='idTipoProducto', default="")
    activo = models.IntegerField(default=0)
    
    def __str__(self):
        return str(self.nroSerie) + " " + str(self.nombreProducto)