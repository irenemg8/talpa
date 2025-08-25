"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Database, Lock, Mail, Phone } from "lucide-react"
import { useTranslation } from "@/hooks/use-translation"

export default function PrivacidadPage() {
  const { t } = useTranslation()
  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-[#00338d]/20 border border-[#00338d]/30">
              <Shield className="h-12 w-12 text-[#00338d]" />
            </div>
          </div>
          <h1 className="font-overpass text-4xl sm:text-5xl font-bold mb-6">{t("privacy.title")}</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {t("privacy.subtitle")}
          </p>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-white/10 text-white/80">
              {t("privacy.lastUpdated")}
            </Badge>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Información del responsable */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Eye className="h-5 w-5 text-[#00338d]" />
                </div>
                {t("privacy.dataController")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">{t("privacy.organization")}</h4>
                  <p className="text-white/80">{t("privacy.organizationName")}</p>
                  <p className="text-white/70 text-sm">{t("privacy.organizationDesc")}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{t("privacy.contact")}</h4>
                  <p className="text-white/80 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    talpatunnelingupv@gmail.com
                  </p>
                  <p className="text-white/70 text-sm">{t("privacy.privacyContact")}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Datos que recopilamos */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Database className="h-5 w-5 text-[#00338d]" />
                </div>
                {t("privacy.informationWeCollect")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-white mb-3">{t("privacy.contactData")}</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.fullName")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.emailAddress")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.phoneNumber")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.university")}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">{t("privacy.academicData")}</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.academicDegree")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.previousExperience")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.technicalSkills")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.motivation")}
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-3">{t("privacy.navigationData")}</h4>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.ipAddress")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.browserDevice")}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1">•</span>
                    {t("privacy.pagesVisited")}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Finalidad del tratamiento */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#00338d]/20">
                  <Lock className="h-5 w-5 text-[#00338d]" />
                </div>
                {t("privacy.dataUsage")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("privacy.candidateManagement")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("privacy.candidateManagementDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("privacy.communication")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("privacy.communicationDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("privacy.websiteImprovement")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("privacy.websiteImprovementDesc")}
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">{t("privacy.legalCompliance")}</h4>
                  <p className="text-white/80 text-sm">
                    {t("privacy.legalComplianceDesc")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Base legal */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("privacy.legalBasis")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  {t("privacy.legalBasisDesc")}
                </p>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1 font-bold">•</span>
                    <div>
                      <strong>{t("privacy.consent")}</strong> {t("privacy.consentDesc")}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1 font-bold">•</span>
                    <div>
                      <strong>{t("privacy.legitimateInterest")}</strong> {t("privacy.legitimateInterestDesc")}
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00338d] mt-1 font-bold">•</span>
                    <div>
                      <strong>{t("privacy.legalObligation")}</strong> {t("privacy.legalObligationDesc")}
                    </div>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Derechos del usuario */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("privacy.yourRights")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  {t("privacy.yourRightsDesc")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">{t("privacy.accessRight")}</h4>
                      <p className="text-white/70 text-xs">{t("privacy.accessRightDesc")}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">{t("privacy.rectificationRight")}</h4>
                      <p className="text-white/70 text-xs">{t("privacy.rectificationRightDesc")}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">{t("privacy.erasureRight")}</h4>
                      <p className="text-white/70 text-xs">{t("privacy.erasureRightDesc")}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">{t("privacy.portabilityRight")}</h4>
                      <p className="text-white/70 text-xs">{t("privacy.portabilityRightDesc")}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">{t("privacy.objectionRight")}</h4>
                      <p className="text-white/70 text-xs">{t("privacy.objectionRightDesc")}</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                      <h4 className="font-semibold text-white text-sm">{t("privacy.restrictionRight")}</h4>
                      <p className="text-white/70 text-xs">{t("privacy.restrictionRightDesc")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Retención de datos */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("privacy.dataRetention")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  {t("privacy.dataRetentionDesc")}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/80">{t("privacy.rejectedCandidates")}</span>
                    <Badge variant="outline" className="border-[#00338d] text-[#00338d]">{t("privacy.twoYears")}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/80">{t("privacy.activeMembers")}</span>
                    <Badge variant="outline" className="border-[#00338d] text-[#00338d]">{t("privacy.membershipPlusOne")}</Badge>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-white/80">{t("privacy.webNavigation")}</span>
                    <Badge variant="outline" className="border-[#00338d] text-[#00338d]">{t("privacy.oneYear")}</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seguridad */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("privacy.securityMeasures")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  {t("privacy.securityMeasuresDesc")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("privacy.dataEncryption")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("privacy.accessControl")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("privacy.securityAudits")}
                    </li>
                  </ul>
                  <ul className="space-y-2 text-white/80">
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("privacy.backups")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("privacy.dataProtectionTraining")}
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#00338d] mt-1">•</span>
                      {t("privacy.incidentProtocols")}
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("privacy.privacyContact2")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-white/80">
                  {t("privacy.privacyContactDesc")}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      {t("privacy.email")}
                    </h4>
                    <p className="text-white/80">talpatunnelingupv@gmail.com</p>
                    <p className="text-white/70 text-sm">{t("privacy.responseTime")}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10">
                    <h4 className="font-semibold text-white mb-2">{t("privacy.postalAddress")}</h4>
                    <p className="text-white/80 text-sm">
                      Talpa Tunneling UPV<br />
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

          {/* Modificaciones */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle>{t("privacy.policyModifications")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80">
                {t("privacy.policyModificationsDesc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
