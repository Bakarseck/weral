import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { PlusCircle, Search, Download } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PaiementsPage() {
  return (
    <DashboardShell>
      <DashboardHeader heading="Gestion des paiements" description="Consultez et gérez les factures et paiements">
        <Link href="/paiements/nouveau">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Nouvelle facture
          </Button>
        </Link>
      </DashboardHeader>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total des paiements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.6M FCFA</div>
            <p className="text-xs text-muted-foreground">Année en cours</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Factures en attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2M FCFA</div>
            <p className="text-xs text-muted-foreground">24 factures non réglées</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paiements du mois</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4M FCFA</div>
            <p className="text-xs text-muted-foreground">Avril 2023</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="factures" className="mt-6">
        <TabsList>
          <TabsTrigger value="factures">Factures</TabsTrigger>
          <TabsTrigger value="paiements">Paiements</TabsTrigger>
        </TabsList>
        <TabsContent value="factures" className="mt-4">
          <div className="flex items-center py-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher une facture..." className="w-full pl-8" />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>N° Facture</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">F-2023-042</TableCell>
                  <TableCell>Amadou Diop</TableCell>
                  <TableCell>12/04/2023</TableCell>
                  <TableCell>250,000 FCFA</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                      Payée
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      PDF
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">F-2023-041</TableCell>
                  <TableCell>Fatou Ndiaye</TableCell>
                  <TableCell>10/04/2023</TableCell>
                  <TableCell>180,000 FCFA</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                      En attente
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/paiements/F-2023-041">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">F-2023-040</TableCell>
                  <TableCell>Ousmane Sow</TableCell>
                  <TableCell>08/04/2023</TableCell>
                  <TableCell>320,000 FCFA</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                      En attente
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href="/paiements/F-2023-040">
                      <Button variant="ghost" size="sm">
                        Voir
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">F-2023-039</TableCell>
                  <TableCell>Aïda Fall</TableCell>
                  <TableCell>05/04/2023</TableCell>
                  <TableCell>150,000 FCFA</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 mr-2"></div>
                      Payée
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      PDF
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        <TabsContent value="paiements" className="mt-4">
          <div className="flex items-center py-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Rechercher un paiement..." className="w-full pl-8" />
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID Paiement</TableHead>
                  <TableHead>N° Facture</TableHead>
                  <TableHead>Patient</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Méthode</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">P-2023-056</TableCell>
                  <TableCell>F-2023-042</TableCell>
                  <TableCell>Amadou Diop</TableCell>
                  <TableCell>12/04/2023</TableCell>
                  <TableCell>250,000 FCFA</TableCell>
                  <TableCell>Carte bancaire</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Reçu
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">P-2023-055</TableCell>
                  <TableCell>F-2023-039</TableCell>
                  <TableCell>Aïda Fall</TableCell>
                  <TableCell>05/04/2023</TableCell>
                  <TableCell>150,000 FCFA</TableCell>
                  <TableCell>Espèces</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Reçu
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">P-2023-054</TableCell>
                  <TableCell>F-2023-038</TableCell>
                  <TableCell>Moussa Gueye</TableCell>
                  <TableCell>02/04/2023</TableCell>
                  <TableCell>200,000 FCFA</TableCell>
                  <TableCell>Virement</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Reçu
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}
