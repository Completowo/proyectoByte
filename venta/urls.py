from django.urls import path
from . import views

urlpatterns = [
    path('',views.inicio,name ='home'),
    path('placaMadreH510M', views.placaMadreH510M, name='MSI-H510M'),
    path('HyperxCloudFlight', views.HyperxCloudFlight, name='HyperxCloudFlight'),
    path('GproX', views.GproX, name='GproX'),
    path('Rtx3050Evga', views.Rtx3050Evga, name='Rtx3050Evga'), 
    path('HpVictus', views.HpVictus, name='HpVictus'),
    path('MouseGPro', views.MouseGProWi, name='MouseGPro'),
    path('Rtx4080Aorus', views.Rtx4080Aorus, name='Rtx4080Aorus'),
    path('S23Ultra', views.S23Ultra, name='S23Ultra'),
    path('Contacto', views.contacto, name='contacto'),
    path('lista_productos', views.ProductosList, name='lista_productos'),
    path('productosAdd', views.ProductosAdd, name='productosAdd'),
    path('eliminarProductos/<str:pk>',views.eliminar_producto,name ='productos_del'),
    path('buscarProducto/<str:pk>',views.buscar_producto,name ='productos_findEdit'),
    path('actualizarProducto',views.actualizar_producto,name ='productos_update'),
    path('listaTipoProducto', views.listar_tipoProducto, name='lista_tipoProducto'),
    path('tipoProductoAdd', views.agregar_tipoProducto, name='tipoProductoAdd'),
    path('eliminarTipoProducto/<str:pk>',views.eliminar_tipoProducto,name ='tipoProducto_del'),
    path('modificarTipoProducto/<str:pk>',views.modificar_tipoProducto,name ='tipoProducto_edit'),
    
]