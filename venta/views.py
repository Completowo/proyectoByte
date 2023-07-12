from django.shortcuts import render, redirect
from .models import Productos, TipoProducto

from .forms import TipoProductoForm

# Create your views here.
def inicio(request):
    context = {}
    return render(request, 'venta/index.html', context)

def placaMadreH510M(request):
    context = {}
    return render(request, 'venta/PlacaMSI.html', context)

def HyperxCloudFlight(request):
    context = {}
    return render(request, 'venta/Cloud-Fight.html', context)

def GproX(request):
    context = {}
    return render(request, 'venta/gproX.html', context)

def Rtx3050Evga(request):
    context = {}
    return render(request, 'venta/Grafica3050EVGA.html', context)

def HpVictus(request):
    context = {}
    return render(request, 'venta/HP-Victus.html', context)

def MouseGProWi(request):
    context = {}
    return render(request, 'venta/MouseGPro.html', context)

def Rtx4080Aorus(request):
    context = {}
    return render(request, 'venta/GraficaAorus.html', context)

def S23Ultra(request):
    context = {}
    return render(request, 'venta/S23Ultra.html', context)

def contacto(request):
    context = {}
    return render(request, 'venta/contacto.html', context)

def carro(request):
    context = {}
    return render(request, 'venta/carro.html', context)

def api(request):
    context = {}
    return render(request, 'venta/api.html', context)

def inicioSe(request):
    context = {}
    return render(request, 'venta/login.html', context)

def registro(request):
    context = {}
    return render(request, 'venta/registro.html', context)

def ProductosList(request):
    lista_productos = Productos.objects.raw('SELECT * FROM venta_productos')
    context = {"productos":lista_productos}
    return render(request,'venta/productosList.html',context)

def ProductosAdd(request):
    if request.method != "POST":
        lista_productos = TipoProducto.objects.all()
        context = {"productos":lista_productos}
        return render(request,'venta/productosAdd.html',context)
    else:
        #izq: variable local  derecha: campo name del formulario en html
        numSerie = request.POST["numSerie"]
        nomProducto = request.POST["nomProducto"]
        canProducto = request.POST["canProducto"]
        preProducto = request.POST["preProducto"]
        tipoProductoId  = request.POST["producto"]


        objProducto = TipoProducto.objects.get(id_tipoProducto = tipoProductoId )

        objProducto = Productos.objects.create(
            nroSerie = numSerie,
            nombreProducto = nomProducto, 
            cantidadProducto = canProducto, 
            precioProducto = preProducto,
            id_tipoProducto = objProducto,
            activo = 1
        )

        objProducto.save()
        lista_productos = TipoProducto.objects.all()
        context = {"mensaje":"Se agregó producto", "productos":lista_productos}
        return render(request,'venta/productosAdd.html',context)
    
def eliminar_producto(request,pk):
    try:
        producto = Productos.objects.get(nroSerie=pk)
        producto.delete() 
        mensaje = "El producto se eliminó"
        lista_productos = Productos.objects.all() 
        context = {"productos":lista_productos, "mensaje":mensaje}
        return render(request,'venta/productosList.html',context)
    except:
        mensaje = "El producto NO se eliminó"
        lista_productos = Productos.objects.all() 
        context = {"productos":lista_productos, "mensaje":mensaje}
        return render(request,'venta/productosList.html',context)
    

def buscar_producto(request,pk):
    if pk != "":
        producto = Productos.objects.get(nroSerie=pk)
        lista_productos = TipoProducto.objects.all()
        context = {"producto":producto, "productos":lista_productos}
        if producto:
            return render(request,'venta/productos_edit.html',context)
        else:
           context = {"mensaje":"No se encontró el alumno"} 
           return render(request,'venta/productosList.html',context)
        

def actualizar_producto(request):
    if request.method == "POST":
        #izq: variable local  derecha: campo name del formulario en html
        numSerie = request.POST["numSerie"]
        nomProducto = request.POST["nomProducto"]
        canProducto = request.POST["canProducto"]
        preProducto = request.POST["preProducto"]
        TipoProductos  = request.POST["TipoProductos"]

        objProducto = TipoProducto.objects.get(id_tipoProducto = TipoProductos)

        objProductos = Productos()
        objProductos.nroSerie = numSerie
        objProductos.nombreProducto = nomProducto
        objProductos.cantidadProducto = canProducto
        objProductos.precioProducto = preProducto
        objProductos.id_tipoProducto = objProducto
        objProductos.activo = 1

        objProductos.save()
        
        lista_productos = TipoProducto.objects.all()
        context = {"mensaje":"Se modificó producto", "productos":lista_productos,"producto":objProducto}
        return render(request,'venta/productos_edit.html',context)
    else:
        lista_productos = Productos.objects.all()
        context = {"producto":lista_productos}
        return render(request,'venta/productosList.html',context)
    


def listar_tipoProducto(request):
    lista_tipoProducto = TipoProducto.objects.all()
    context = {"Tproducto":lista_tipoProducto}
    return render(request,'venta/tipoProductoslist.html',context)



def agregar_tipoProducto(request):
    if request.method == "POST":
        form = TipoProductoForm(request.POST)
        if form.is_valid:
            form.save() #insert en la BD
            form = TipoProductoForm()
            context={"mensaje":"se guardó Tipo de Producto","form":form}
            return render(request,'venta/tipoProductosAdd.html',context)
    else:
        form = TipoProductoForm()
        context={"form":form}
        return render(request,'venta/tipoProductosAdd.html',context)
    


def eliminar_tipoProducto(request,pk):
    try:
        tipoProducto = TipoProducto.objects.get(id_tipoProducto=pk)
        if tipoProducto:
            tipoProducto.delete() #delete en la BD
            mensaje = "El tipo de producto se eliminó"
            lista_TipoProducto = TipoProducto.objects.all() 
            context = {"Tproducto":lista_TipoProducto, "mensaje":mensaje}
            return render(request,'venta/tipoProductoslist.html',context)
    except:
        mensaje = "El tipo de producto NO existe"
        lista_TipoProducto = TipoProducto.objects.all() 
        context = {"Tproducto":lista_TipoProducto, "mensaje":mensaje}
        return render(request,'venta/tipoProductoslist.html',context)

def modificar_tipoProducto(request,pk):
    try:
        tipoProducto = TipoProducto.objects.get(id_tipoProducto=pk)
        if tipoProducto:
            if request.method == "POST":
                form = TipoProductoForm(request.POST,instance=tipoProducto)
                form.save() #update en la BD
                context={"mensaje":"se actualizó el tipo de producto","form":form,"Tproducto":tipoProducto}
                return render(request,'venta/tipoProductosEdit.html',context)
            else:
                form = TipoProductoForm(instance=tipoProducto)  
                context={"mensaje":"","form":form,"Tproducto":tipoProducto}
                return render(request,'venta/tipoProductosEdit.html',context)
    except:
        lista_generos = TipoProducto.objects.all()
        mensaje = "El tipo de producto NO existe"
        context={"mensaje":mensaje,"Tproducto":lista_generos}
        return render(request,'venta/tipoProductoslist.html',context)