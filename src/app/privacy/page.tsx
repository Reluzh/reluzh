
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, LockKeyhole } from "lucide-react"; 

export default function PrivacyPage() {
  const lastUpdated = "28 Juillet 2024"; 

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <header className="text-center py-6">
        <ShieldCheck className="w-12 h-12 mx-auto mb-3 text-primary" />
        <h1 className="text-3xl font-bold text-primary mb-2">Politique de Confidentialité</h1>
        <p className="text-sm text-muted-foreground">Dernière mise à jour : {lastUpdated}</p>
      </header>

      <Card className="shadow-md rounded-lg border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">1. Introduction</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3 text-sm">
          <p>Bienvenue chez ReboxIt ("nous", "notre", ou "nos"). Nous nous engageons à protéger vos informations personnelles et votre droit à la vie privée. Si vous avez des questions ou des préoccupations concernant cet avis de confidentialité, ou nos pratiques concernant vos informations personnelles, veuillez nous contacter à privacy@reboxit.ma.</p>
          <p>Cet avis de confidentialité décrit comment nous pourrions utiliser vos informations si vous visitez notre site web à reboxit.ma, utilisez notre application mobile, ou interagissez avec nous d'autres manières connexes - y compris les ventes, le marketing ou les événements.</p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">2. Informations que Nous Collectons</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3 text-sm">
          <p><strong>Informations personnelles que vous nous divulguez :</strong> Nous collectons les informations personnelles que vous nous fournissez volontairement lorsque vous vous inscrivez aux Services, exprimez un intérêt à obtenir des informations sur nous ou nos produits et Services, lorsque vous participez à des activités sur les Services, ou autrement lorsque vous nous contactez.</p>
          <p>Les informations personnelles que nous collectons dépendent du contexte de vos interactions avec nous et les Services, des choix que vous faites, et des produits et fonctionnalités que vous utilisez. Les informations personnelles que nous collectons peuvent inclure ce qui suit : nom, adresse e-mail, numéro de téléphone, adresse, informations de paiement, et autres informations similaires.</p>
          <p><strong>Informations collectées automatiquement :</strong> Nous collectons automatiquement certaines informations lorsque vous visitez, utilisez ou naviguez sur les Services. Ces informations ne révèlent pas votre identité spécifique (comme votre nom ou vos coordonnées) mais peuvent inclure des informations sur l'appareil et l'utilisation, telles que votre adresse IP, les caractéristiques de votre navigateur et de votre appareil, votre système d'exploitation, vos préférences linguistiques, les URL de référence, le nom de l'appareil, le pays, l'emplacement, des informations sur comment et quand vous utilisez nos Services, et d'autres informations techniques.</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-md rounded-lg border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">3. Comment Nous Utilisons Vos Informations</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-3 text-sm">
          <p>Nous utilisons les informations personnelles collectées via nos Services à diverses fins commerciales décrites ci-dessous. Nous traitons vos informations personnelles à ces fins en nous fondant sur nos intérêts commerciaux légitimes, afin de conclure ou d'exécuter un contrat avec vous, avec votre consentement, et/ou pour nous conformer à nos obligations légales.</p>
          <ul className="list-disc list-inside space-y-1 pl-4">
            <li>Pour faciliter la création de compte et le processus de connexion.</li>
            <li>Pour publier des témoignages (avec votre consentement).</li>
            <li>Pour gérer les comptes utilisateurs.</li>
            <li>Pour vous envoyer des informations administratives.</li>
            <li>Pour protéger nos Services (par exemple, pour la surveillance et la prévention de la fraude).</li>
            <li>Pour faire respecter nos termes, conditions et politiques à des fins commerciales, pour nous conformer aux exigences légales et réglementaires ou en relation avec notre contrat.</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary flex items-center">
            <LockKeyhole className="w-5 h-5 mr-2 text-accent" /> Sécurité des Données
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          <p>Nous avons mis en œuvre des mesures de sécurité techniques et organisationnelles appropriées conçues pour protéger la sécurité de toutes les informations personnelles que nous traitons. Cependant, malgré nos mesures de protection et nos efforts pour sécuriser vos informations, aucune transmission électronique sur Internet ou technologie de stockage d'informations ne peut être garantie à 100 %, nous ne pouvons donc pas promettre ou garantir que des pirates, des cybercriminels ou d'autres tiers non autorisés ne pourront pas déjouer notre sécurité et collecter, accéder, voler ou modifier incorrectement vos informations.</p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">4. Vos Droits à la Confidentialité</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          <p>Dans certaines régions (comme l'EEE, le Royaume-Uni et le Canada), vous disposez de certains droits en vertu des lois applicables sur la protection des données. Ceux-ci peuvent inclure le droit (i) de demander l'accès et d'obtenir une copie de vos informations personnelles, (ii) de demander la rectification ou l'effacement ; (iii) de restreindre le traitement de vos informations personnelles ; et (iv) le cas échéant, à la portabilité des données. Dans certaines circonstances, vous pouvez également avoir le droit de vous opposer au traitement de vos informations personnelles. Pour faire une telle demande, veuillez utiliser les coordonnées fournies ci-dessous.</p>
        </CardContent>
      </Card>

      <Card className="shadow-md rounded-lg border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-primary">5. Contactez-Nous</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          <p>Si vous avez des questions ou des commentaires sur cet avis, vous pouvez nous envoyer un e-mail à privacy@reboxit.ma ou par courrier à :</p>
          <p className="mt-2">
            Équipe de Confidentialité ReboxIt<br />
            Technopark, Route de Nouaceur<br />
            Casablanca<br />
            Maroc
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

    