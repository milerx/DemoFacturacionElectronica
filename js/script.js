//Declaro las variables
        const click = document.getElementById('aceptar');
        const tipoC = document.getElementById('tipo-cliente');
        const tipoD = document.getElementById('tipo-Documento');
        const nombre_p = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const documento = document.getElementById('documento');
        const departamento = "Atlantico";//document.getElementById('departamento');
        const selector = document.getElementById('ciudad');


        
    var ciudad = selector[selector.selectedIndex].value;

     
        const zona = document.getElementById('zona');
        const direccion = document.getElementById('direccion');
     
        const telefono = document.getElementById('telefono');
        const email = document.getElementById('email');
        const desc_1 = document.getElementById('desc-1');
        const cant_1 = document.getElementById('cant-1');
        const prec_1 = document.getElementById('prec-1');
        const moneda_det = "COP";
        const desc_2 = document.getElementById('desc-2');
        const cant_2 = document.getElementById('cant-2');
        const prec_2 = document.getElementById('prec-2');
        const desc_3 = document.getElementById('desc-3');
        const cant_3 = document.getElementById('cant-3');
        const prec_3 = document.getElementById('prec-3');
        const desc_4 = document.getElementById('desc-4');
        const cant_4 = document.getElementById('cant-4');
        const prec_4 = document.getElementById('prec-4');
        const desc_5 = document.getElementById('desc-5');
        const cant_5 = document.getElementById('cant-5');
        const prec_5 = document.getElementById('prec-5');
        const pais = "CO";
    
       
       $("#aceptar").on("click", getUsers);
            function getUsers() {
             $.ajax({
            url: 'http://35.190.138.22/FacturacionElectronica/procesarFactura',
	        method: "POST",
	        data: 
        {
	        "adquiriente": {
		    "tipo":{
			"codigo":"2"
		},
		"parte":{
			"identificacion":{
				"tipo":{
					"codigo":"22"
				},
				"valor": documento.value
			},
			"direccionFisica":{
				"Linea": direccion.value,
                "Zona": "Centro",
                "Ciudad": ciudad.value,
                "Departamento": departamento.value,
                "pais":{
					"codigo":"CO"
				}
			},
			"regimenFiscal":{
				"tipo":"0"
			},
            "Nombres": nombre_p.value,
            "Apellidos": apellido.value,
            "Contacto":{
                "CorreoElectronico": email.value,
                "NumeroTelefonico": telefono.value
            }
		}
	},
	"linea": [
				{
	                "Cantidad": cant_1.value,
	                "Descripcion": desc_1.value,
	                "Moneda": {
	                	"Codigo":"COP"
	                },
	                "PrecioUnitario": prec_1.value,
	                "CostoTotal": prec_1.value * cant_1.value
	            }
        ],
    "Impuesto":[
    {
                  Tipo: {
                    Codigo:"01"
                  },
                  Porcentaje: 16,
                   Moneda: {
                    Codigo:"COP"
                  },
                  BaseImponible: 10121904,
                  Importe: 1619504.64,
                  Retenido: false
              },
              {
                  Tipo: {
                    Codigo:"03"
                  },
                  Porcentaje: 4.14,
                  Moneda: {
                  Codigo:"COP"
                  },
                  BaseImponible: 10121904,
                  Importe: 419046.82,
                  Retenido: false
              }
	       
    	],
    	"importes":{
            "Moneda":{
            	"Codigo":"COP"
            },
            "ImporteBruto":prec_1.value * cant_1.value,
            "Impuestos":0,
            "Total":prec_1.value * cant_1.value
        }
            
},
    success: function(respuesta) {
      alert('Factura Enviada Exitosamente!');
      location.reload();
    },
    error: function() {
       alert('Error al enviar la factura');
    }
  
})}