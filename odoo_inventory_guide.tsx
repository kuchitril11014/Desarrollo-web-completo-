import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Play, Search, Package, BarChart3, Settings, List, Users, Clock } from 'lucide-react';

export default function OdooInventoryGuide() {
  const [activeStep, setActiveStep] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);

  const steps = [
    {
      title: "1. Acceder a Odoo Studio",
      icon: <Play className="w-6 h-6" />,
      content: [
        "Inicia sesión en tu instancia de Odoo (odoo.sh o SaaS)",
        "Busca el ícono 'Toggle Studio' en la parte superior derecha (cerca del nombre de tu empresa)",
        "Si no lo ves, ve a Apps → busca 'Studio' → Instalar",
        "Haz clic en el ícono para activar el modo Studio"
      ],
      tip: "Studio solo está disponible en Odoo Enterprise. Con tu acceso a odoo.sh ya lo tienes disponible."
    },
    {
      title: "2. Crear Nueva Aplicación",
      icon: <Package className="w-6 h-6" />,
      content: [
        "Haz clic en el botón '+' (Crear nueva app)",
        "Nombre sugerido: 'Conteo de Inventario' o 'Inventario por Categorías'",
        "Elige un ícono personalizado (recomendado: icono de checklist o inventario)",
        "Haz clic en 'Crear'"
      ],
      tip: "Piensa bien el nombre desde el inicio, será el que vean todos los usuarios."
    },
    {
      title: "3. Definir Modelo de Datos",
      icon: <List className="w-6 h-6" />,
      content: [
        "Crea tu primer menú: 'Conteos' o 'Sesiones de Conteo'",
        "Selecciona 'Nuevo Modelo'",
        "Nombre del modelo: 'x_conteo_inventario'",
        "Odoo sugerirá características automáticas - acepta las relevantes"
      ],
      tip: "El prefijo 'x_' es obligatorio para modelos personalizados en Studio."
    },
    {
      title: "4. Agregar Campos Esenciales",
      icon: <Settings className="w-6 h-6" />,
      content: [
        "📍 Ubicación/Almacén (Many2one → stock.location)",
        "📦 Producto (Many2one → product.product)",
        "🏷️ Categoría de Producto (Many2one → product.category)",
        "📊 Cantidad en Sistema (Float)",
        "✅ Cantidad Contada (Float)",
        "📉 Diferencia (Float - calculado)",
        "👤 Responsable (Many2one → res.users)",
        "📅 Fecha de Conteo (Date)",
        "⏱️ Estado (Selection: Borrador/En Progreso/Completado)"
      ],
      tip: "Usa 'drag & drop' desde el panel izquierdo para agregar campos. Los campos Many2one permiten relaciones con otros módulos."
    },
    {
      title: "5. Configurar Vistas",
      icon: <BarChart3 className="w-6 h-6" />,
      content: [
        "📋 Vista Lista: Muestra todos los conteos",
        "📝 Vista Formulario: Detalles de cada conteo",
        "📊 Vista Kanban: Visualización por estado",
        "📈 Vista Pivote: Análisis por categoría/ubicación",
        "📅 Vista Calendario: Programar conteos"
      ],
      tip: "Haz clic en 'Vistas' en la parte superior y personaliza cada una según tus necesidades."
    },
    {
      title: "6. Funcionalidades Avanzadas",
      icon: <Users className="w-6 h-6" />,
      content: [
        "🤖 Automatizaciones: Calcular diferencias automáticamente",
        "🔔 Notificaciones: Alertar al responsable cuando haya discrepancias",
        "📱 Integración con Barcode: Escanear productos durante conteo",
        "🔒 Control de Acceso: Definir quién puede crear/aprobar conteos",
        "📊 Reportes: Crear reportes PDF de conteos completados"
      ],
      tip: "Ve a la pestaña 'Automations' para crear reglas que calculen la diferencia: Diferencia = Cantidad Contada - Cantidad en Sistema"
    }
  ];

  const features = [
    {
      title: "Conteo por Ubicación",
      description: "Organiza conteos por almacén, pasillo o estante específico",
      icon: <Search className="w-5 h-5" />
    },
    {
      title: "Conteo por Categoría",
      description: "Filtra y cuenta productos por su categoría",
      icon: <Package className="w-5 h-5" />
    },
    {
      title: "Sesiones Múltiples",
      description: "Varios usuarios pueden contar simultáneamente en diferentes ubicaciones",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Seguimiento de Tiempo",
      description: "Registra cuánto tiempo toma cada sesión de conteo",
      icon: <Clock className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Crear App de Conteo de Inventario en Odoo Studio
          </h1>
          <p className="text-gray-600 text-lg">
            Guía paso a paso para crear tu aplicación personalizada sin necesidad de programar
          </p>
        </div>

        {/* Quick Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-purple-600">{feature.icon}</div>
                <h3 className="font-semibold text-gray-800">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => setActiveStep(activeStep === idx ? -1 : idx)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-purple-600">{step.icon}</div>
                  <h2 className="text-xl font-bold text-gray-800">{step.title}</h2>
                </div>
                <ChevronRight 
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    activeStep === idx ? 'rotate-90' : ''
                  }`}
                />
              </button>
              
              {activeStep === idx && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="mt-4 space-y-3">
                    {step.content.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  {step.tip && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-blue-800">
                        <span className="font-semibold">💡 Tip: </span>
                        {step.tip}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Tips */}
        <div className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">¿Qué Más Puedes Hacer?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">✅ Integración con Módulos Existentes</h4>
              <p className="text-purple-100 text-sm">
                Tu app se integra automáticamente con los módulos de Inventario, Productos y Almacén de Odoo
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📱 Compatible con Barcode</h4>
              <p className="text-purple-100 text-sm">
                Puedes habilitar escaneo de códigos de barras para agilizar el conteo
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">📊 Reportes Personalizados</h4>
              <p className="text-purple-100 text-sm">
                Crea reportes en PDF con diferencias encontradas y ajustes necesarios
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔄 Ajustes Automáticos</h4>
              <p className="text-purple-100 text-sm">
                Configura acciones automáticas para crear ajustes de inventario basados en los conteos
              </p>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">📚 Recursos Adicionales</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Documentación oficial de Odoo Studio en docs.odoo.com</li>
            <li>• Módulo de Inventario nativo para entender la estructura</li>
            <li>• Apps de Odoo Store para inspiración (Stock Inventory Count)</li>
            <li>• Tutoriales en YouTube: "Odoo Studio Tutorial"</li>
          </ul>
        </div>
      </div>
    </div>
  );
}