import { DashboardHeader } from "@/components/admin/dashboard/main/dashboard-header"
import { DashboardShell } from "@/components/admin/dashboard/main/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GeneralSettingsForm } from "@/components/admin/dashboard/settings/general-settings-form"
import { PagesSettingsForm } from "@/components/admin/dashboard/settings/pages-settings-form"
import { FormsSettingsForm } from "@/components/admin/dashboard/settings/forms-settings-form"
import { AdvancedSettingsForm } from "@/components/admin/dashboard/settings/advanced-settings-form"

export default function SettingsPage() {
    return (
      <DashboardShell>
        <DashboardHeader heading="Settings" description="Manage your website configuration and settings" />
        <Tabs defaultValue="general" className="space-y-4">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="forms">External Forms</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
          <TabsContent value="general" className="space-y-4">
            <GeneralSettingsForm />
          </TabsContent>
          <TabsContent value="pages" className="space-y-4">
            <PagesSettingsForm />
          </TabsContent>
          <TabsContent value="forms" className="space-y-4">
            <FormsSettingsForm />
          </TabsContent>
          <TabsContent value="advanced" className="space-y-4">
            <AdvancedSettingsForm />
          </TabsContent>
        </Tabs>
      </DashboardShell>
    )
  }
  