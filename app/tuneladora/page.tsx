"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Globe } from "lucide-react"
import { getPdfPath } from "@/lib/assets"
import { useTranslation } from "@/hooks/use-translation"
import { Tunneler3DModel } from "@/components/ui/tunneler-3d-model"

export default function TuneladoraPage() {
  const { t } = useTranslation()

  const specs = [
    { label: t("tunneler.diameter"), value: "0.6 m", icon: "📏" },
    { label: t("tunneler.material"), value: "Acero S275", icon: "⚙️" },
    { label: t("tunneler.torque"), value: "10 kN·m", icon: "🔧" },
    { label: t("tunneler.speed"), value: "18 m/h", icon: "🚀" },
    { label: t("tunneler.power"), value: "100 kW", icon: "⚡" },
    { label: t("tunneler.motor"), value: "136 CV", icon: "🔋" },
  ]

  const components = [
    {
      name: t("tunneler.cuttingHead"),
      description: t("tunneler.cuttingHeadDesc"),
      subsystem: t("tunneler.cuttingExcavation"),
      status: t("tunneler.enDesarrollo"),
    },
    {
      name: t("tunneler.propulsionSystem"),
      description: t("tunneler.propulsionSystemDesc"),
      subsystem: t("tunneler.propulsionTitle"),
      status: t("tunneler.prototipo"),
    },
    {
      name: t("tunneler.structuralChassis"),
      description: t("tunneler.structuralChassisDesc"),
      subsystem: t("tunneler.structuralDesign"),
      status: t("tunneler.disenoFinal"),
    },
    {
      name: t("tunneler.evacuationSystem"),
      description: t("tunneler.evacuationSystemDesc"),
      subsystem: t("tunneler.materialHandlingTitle"),
      status: t("tunneler.enDesarrollo"),
    },
    {
      name: t("tunneler.controlSystem"),
      description: t("tunneler.controlSystemDesc"),
      subsystem: t("tunneler.automationTitle"),
      status: t("tunneler.investigacion"),
    },
    {
      name: t("tunneler.electricalFeeding"),
      description: t("tunneler.electricalFeedingDesc"),
      subsystem: t("tunneler.electricalSystems"),
      status: t("tunneler.prototipo"),
    },
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">{t("tunneler.title")}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            {t("tunneler.description")}
          </p>
          
          {/* Botones de descarga */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              asChild 
              className="btn-primary relative overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95 border border-white/30 hover:border-white/50"
            >
              <a 
                href={getPdfPath("Dossier Talpa Tunneling UPV_2025-Español.pdf")}
                download="Dossier_Talpa_Tunneling_UPV_2025_Español.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center justify-center gap-2 relative z-10">
                  <FileText className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span className="font-semibold">Dossier Español</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              className="border-white/30 hover:bg-white/10 text-white/90 transition-all duration-200 hover:border-white/50 hover:scale-105 active:scale-95"
            >
              <a 
                href={getPdfPath("Dossier Talpa Tunneling UPV_2025 - Inglés.pdf")}
                download="Dossier_Talpa_Tunneling_UPV_2025_English.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="h-4 w-4 mr-2 transition-transform hover:rotate-12" />
                <span className="font-medium">English Dossier</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Modelo 3D Interactivo */}
          <div className="space-y-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">
                  {t("tunneler.interactiveModel")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tunneler3DModel className="w-full h-80 rounded-lg" />
                <p className="text-center text-white/70 mt-4 text-sm">
                  {t("tunneler.modelInstructions")}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Especificaciones Técnicas */}
          <div className="space-y-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">{t("tunneler.specifications")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {specs.map((spec, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                      <span className="text-2xl">{spec.icon}</span>
                      <div>
                        <div className="font-semibold text-white">{spec.value}</div>
                        <div className="text-white/70 text-sm">{spec.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="font-overpass text-xl">{t("tunneler.features")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{t("tunneler.optimizedDiameter")}</h4>
                    <p className="text-white/70 text-sm">
                      {t("tunneler.optimizedDiameterDesc")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{t("tunneler.electricPropulsion")}</h4>
                    <p className="text-white/70 text-sm">{t("tunneler.electricPropulsionDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{t("tunneler.automatedControl")}</h4>
                    <p className="text-white/70 text-sm">{t("tunneler.automatedControlDesc")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#00338d] rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">{t("tunneler.robustStructure")}</h4>
                    <p className="text-white/70 text-sm">
                      {t("tunneler.robustStructureDesc")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tabs con información detallada */}
        <Tabs defaultValue="components" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/10">
            <TabsTrigger value="components">{t("tunneler.components")}</TabsTrigger>
            <TabsTrigger value="process">{t("tunneler.process")}</TabsTrigger>
            <TabsTrigger value="innovation">{t("tunneler.innovation")}</TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component, index) => (
                <Card
                  key={index}
                  className="glass-card border-white/10 hover:border-white/30 transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-overpass font-semibold text-lg">{component.name}</h3>
                      <Badge
                        variant={component.status === t("tunneler.disenoFinal") ? "default" : "secondary"}
                        className={`text-xs ${
                          component.status === t("tunneler.disenoFinal")
                            ? "bg-green-500/20 text-green-400"
                            : component.status === t("tunneler.prototipo")
                              ? "bg-yellow-500/20 text-yellow-400"
                              : component.status === t("tunneler.enDesarrollo")
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-purple-500/20 text-purple-400"
                        }`}
                      >
                        {component.status}
                      </Badge>
                    </div>

                    <p className="text-white/80 text-sm mb-4">{component.description}</p>

                    <Badge variant="outline" className="text-xs border-[#00338d]/50 text-[#00338d]">
                      {component.subsystem}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="process" className="mt-8">
            <Card className="glass-card border-white/10">
              <CardContent className="p-8">
                <h3 className="font-overpass text-2xl font-bold mb-6">{t("tunneler.procesoExcavacion")}</h3>

                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.preparacionTerreno")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.preparacionTerrenoDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.posicionamientoArranque")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.posicionamientoArranqueDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.corteExcavacion")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.corteExcavacionDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.gestionMateriales")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.gestionMaterialesDesc")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#00338d] rounded-full flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{t("tunneler.controlMonitorizacion")}</h4>
                      <p className="text-white/80">
                        {t("tunneler.controlMonitorizacionDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="innovation" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="font-overpass text-xl">{t("tunneler.innovacionesTecnologicas")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#00338d]">{t("tunneler.navegacionAutonoma")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.navegacionAutonomaDesc")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#00338d]">{t("tunneler.disenoModular")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.disenoModularDesc")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-[#00338d]">{t("tunneler.controlRemotoAvanzado")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.controlRemotoAvanzadoDesc")}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-white/10">
                <CardHeader>
                  <CardTitle className="font-overpass text-xl">{t("tunneler.ventajasCompetitivas")}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">{t("tunneler.eficienciaEnergetica")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.eficienciaEnergeticaDesc")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">{t("tunneler.evacuacionNeumatica")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.evacuacionNeumaticaDesc")}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-green-400">{t("tunneler.compactoVersatil")}</h4>
                    <p className="text-white/80 text-sm">
                      {t("tunneler.compactoVersatilDesc")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="glass-card border-white/10 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h2 className="font-overpass text-2xl font-bold mb-4">{t("tunneler.wantToKnowMore")}</h2>
              <p className="text-white/80 mb-6">
                {t("tunneler.downloadDesc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  asChild 
                  className="btn-primary relative overflow-hidden group transition-all duration-300 hover:scale-105 active:scale-95 border border-white/30 hover:border-white/50"
                >
                  <a 
                    href={getPdfPath("Dossier Talpa Tunneling UPV_2025-Español.pdf")}
                    download="Dossier_Talpa_Tunneling_UPV_2025_Español.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center justify-center gap-2 relative z-10">
                      <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
                      <span className="font-semibold">{t("tunneler.downloadDossier")}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </a>
                </Button>
                <Button asChild variant="outline" className="border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdyjIfYQlXzuvfqzczbDjWh75WYl4gSYObInoUT2xMlE8WrBg/viewform?pli=1" target="_blank" rel="noopener noreferrer">
                    <span className="font-medium">{t("tunneler.joinProject")}</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
