"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertTriangle, Scale, Users, Globe, Shield } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function TerminosPage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#00338d]/20 border border-[#00338d]/30">
              <FileText className="h-12 w-12 text-[#00338d]" />
            </div>
          </div>
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">{t("terms.title")}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t("terms.subtitle")}
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-white/10 text-white/80">
              {t("terms.lastUpdated")}
            </Badge>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Aceptación de términos */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Scale className="h-5 w-5 text-[#00338d]" />
                </div>
                {t("terms.termsAcceptance")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80">
                {t("terms.termsAcceptanceDesc")}
              </p>
              <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-200 mb-2">{t("terms.important")}</h4>
                    <p className="text-amber-100/80 text-sm">
                      {t("terms.importantNote")}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sobre Talpa Tunneling UPV */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Users className="h-5 w-5 text-[#00338d]" />
                </div>
                {t("terms.aboutTalpa")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">{t("terms.projectNature")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.projectNatureDesc")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{t("terms.academicCharacter")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.academicCharacterDesc")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uso del sitio web */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Globe className="h-5 w-5 text-[#00338d]" />
                </div>
                {t("terms.websiteUsage")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">{t("terms.allowedUses")}</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    {t("terms.consultInfo")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    {t("terms.requestContact")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    {t("terms.applyTeam")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    {t("terms.shareContent")}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">{t("terms.prohibitedUses")}</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    {t("terms.commercialUse")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    {t("terms.unauthorizedAccess")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    {t("terms.maliciousContent")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">✗</span>
                    {t("terms.illegalActivities")}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Propiedad intelectual */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("terms.intellectualProperty")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("terms.websiteContent")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.websiteContentDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("terms.brandUsage")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.brandUsageDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("terms.userContent")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.userContentDesc")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Participación en el equipo */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("terms.teamParticipation")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-3">{t("terms.selectionProcess")}</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("terms.selectionCriteria")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("terms.noGuarantee")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("terms.finalDecisions")}
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">{t("terms.memberCommitments")}</h4>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("terms.dedication")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("terms.respect")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("terms.confidentiality")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("terms.compliance")}
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitación de responsabilidad */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Shield className="h-5 w-5 text-[#00338d]" />
                </div>
                {t("terms.liabilityLimitation")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("terms.serviceAvailability")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.serviceAvailabilityDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("terms.informationAccuracy")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.informationAccuracyDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("terms.externalLinks")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.externalLinksDesc")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Protección de datos */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("terms.dataProtection")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80">
                {t("terms.dataProtectionDesc")}
                <a href="/privacidad" className="text-[#00338d] hover:text-[#00338d]/80 underline ml-1">
                  {t("terms.privacyPolicy")}
                </a>
                {t("terms.dataProtectionNote")}
              </p>
              <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                <p className="text-blue-100/80 text-sm">
                  {t("terms.privacyAcceptance")}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Modificaciones */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("terms.termsModifications")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white/80">
                {t("terms.termsModificationsDesc")}
              </p>
              <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                <h4 className="font-semibold text-white mb-2">{t("terms.changeNotification")}</h4>
                <p className="text-white/80 text-sm">
                  {t("terms.changeNotificationDesc")}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Ley aplicable */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("terms.applicableLaw")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("terms.governingLaw")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.governingLawDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("terms.jurisdiction")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("terms.jurisdictionDesc")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("terms.contact")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  {t("terms.contactDesc")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">{t("terms.email")}</h4>
                    <p className="text-white/80">talpatunnelingupv@gmail.com</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">{t("terms.address")}</h4>
                    <p className="text-white/80 text-sm">
                      Edificio 4Q<br />
                      Universidad Politécnica de Valencia<br />
                      Camino de Vera, s/n<br />
                      46022 Valencia, España
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
