import Layout from '#components/Layout/Layout'
import C, { apply } from 'consistencss'

import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

const Policy = () => {
  const titleStyle = apply(C.textBlack, C.familyBold, C.font5, C.mt4, C.mb3)
  const textStyle = apply(C.textBlack, C.familyMedium, C.font4)

  return (
    <Layout style={apply(C.p4) as ViewStyle}>
      <View>
        <Text style={titleStyle}>POLÍTICA DE PRIVACIDAD </Text>
        <Text style={textStyle}>
          La presente Política de Privacidad establece los términos en que Última Figurita usa y
          protege la información que es proporcionada por sus usuarios al momento de utilizar su
          aplicación móvil o su sitio web. Última Figurita está comprometida con la seguridad de los
          datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la
          cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo
          con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar
          con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar
          continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
        </Text>
        <Text style={titleStyle}>Información que es recogida</Text>
        <Text style={textStyle}>
          Nuestra aplicación y/o sitio web podrá recoger información personal (como correo
          electrónico, ubicación geográfica y datos de contacto proporcionados por cada usuario).
          Así mismo cuando sea necesario podrá ser requerida información específica para procesar
          alguna función de la aplicación.
        </Text>
        <Text style={titleStyle}>Uso de la información recogida</Text>
        <Text style={textStyle}>
          Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio
          posible. Es posible que sean enviados correos electrónicos periódicamente a través de
          nuestro sitio con novedades y otra información publicitaria que consideremos relevante
          para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán
          enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier
          momento.
        </Text>
        <Text style={titleStyle}>Cookies</Text>
        <Text style={textStyle}>
          Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso
          para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve
          entonces para tener información respecto al tráfico web, y también facilita las futuras
          visitas a una web recurrente.
        </Text>
        <Text style={textStyle}>
          Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas
          y su frecuencia. Esta información es empleada únicamente para análisis estadístico y
          después la información se elimina de forma permanente. Usted puede eliminar las cookies en
          cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un
          mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de
          usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede
          aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies
          automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar
          la configuración de su ordenador para declinar las cookies. Si se declinan es posible que
          no pueda utilizar algunos de nuestros servicios.
        </Text>
        <Text style={titleStyle}>Enlaces a Terceros</Text>
        <Text style={textStyle}>
          Este sitio web pudiera contener en laces a otros sitios que pudieran ser de su interés.
          Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos
          control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los
          términos o privacidad ni de la protección de sus datos en esos otros sitios terceros.
          Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es
          recomendable que los consulte para confirmar que usted está de acuerdo con estas.
        </Text>
        <Text style={titleStyle}>Control de su información personal</Text>
        <Text style={textStyle}>
          En cualquier momento usted puede restringir la recopilación o el uso de la información
          personal que es proporcionada a nuestra aplicación y/o sitio web. Cada vez que lo desee,
          puede marcar o desmarcar la opción de recibir información por correo electrónico, así como
          dar de baja su cuenta en su totalidad.
        </Text>
        <Text style={textStyle}>
          Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada
          sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
        </Text>
        <Text style={textStyle}>
          <Text style={apply(C.familyHeavy)}>Última Figurita</Text> se reserva el derecho de cambiar
          los términos de la presente Política de Privacidad en cualquier momento.
        </Text>
      </View>
    </Layout>
  )
}

export default Policy
