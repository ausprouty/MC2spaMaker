<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"


export default {
   methods:{
    async addNote(noteid){
       var noteText = document.getElementById(noteid).value
       var noteHeight = await SQLiteService.addNote(noteid, this.$route.name, noteText)
       document.getElementById(noteid).style.height = noteHeight
    },
    goToPageAndSetReturn(gotoPath){
      localStorage.setItem("returnpage", this.$route.name);
      this.$router.push({
        path: gotoPath,
      })
    },
    pageGoBack(returnto){
      if (localStorage.getItem("returnpage")) {
        returnto = localStorage.getItem("returnpage");
        localStorage.removeItem("returnpage")
      }
      this.$router.push({
        name: returnto,
      })
    },
    popUp(verse){
      usePopUp(verse)
    },
    share(what, v1, v2){
      useShare(what, v1, v2)
    },
    vuePush(id){
      this.$router.push({
        name: id,
      })
    },
  },
  async mounted() {
    localStorage.setItem("lastpage", this.$route.name)
    useFindSummaries()
    useFindCollapsible()
    useRevealMedia()
    await SQLiteService.notes(this.$route.name)
  },
}
</script>
<template>
  <div id="nav">
    <div class="nav full internal-link" @click="this.pageGoBack('spa-tc-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>9.</h1></div>
                        <div class="chapter_title ltr"><h1>¿CÓMO  PUEDE USTED  ORAR CON  CONFIANZA?</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
    <button id="MC2/spa/audio/tc/CT 9.mp3" type="button" class="external-audio">
        Escuchar &nbsp;"&iquest;C&Oacute;MO PUEDE USTED ORAR CON CONFIANZA?"&nbsp;</button>
        <div class="collapsed"></div>
    

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ USTED PUEDE AYUDAR A CAMBIAR LAS VIDAS DE HOMBRES Y NACIONES</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>&iquest;Ha considerado el hecho de que usted tiene acceso inmediato al Ser m&aacute;s poderoso del universo? Durante los &uacute;ltimos cuarenta a&ntilde;os, he tenido el honor y el privilegio de reunirme con algunos de los presidentes de los Estados Unidos.</p>

<p>Todo jefe de estado tiene un cronograma de actividades muy ajustado y aunque muchos de sus amigos y seguidores desear&iacute;an ser invitados para reunirse con alguien tan importante, debido a su tiempo limitado, s&oacute;lo algunos acceden a conceder ese privilegio. Adem&aacute;s los que pueden ir deben pasar por una revisi&oacute;n meticulosa antes de acerc&aacute;rsele a un presidente.</p>

<p>Como hijo de Dios, usted tiene la oportunidad de obtener una audiencia inmediata con el Rey de reyes, Se&ntilde;or de se&ntilde;ores, Presidente de los presidentes. Cualquiera que sea la necesidad, cualquiera que sea el momento, siempre hay tiempo para usted en Su cronograma de actividades; Su agenda est&aacute; abierta para concederle una cita a usted; toda Su atenci&oacute;n est&aacute; volcada hacia usted.</p>

<p>&iquest;Se le ha ocurrido a usted alguna vez, cuando est&aacute; arrodillado orando, que no s&oacute;lo es escuchado por la Persona m&aacute;s grandiosa del universo, sino que adem&aacute;s usted tiene el privilegio de ser usado por Dios para ayudar a cambiar la vida de personas y naciones? Literalmente, Dios ha puesto a su disposici&oacute;n Sus vastas reservas de poder, sabidur&iacute;a, amor y gracia, con la &uacute;nica condici&oacute;n de que est&eacute; dispuesto a creerle, a confiarle y obedecerle a &Eacute;l.</p>

<p>Entonces, &iquest;por qu&eacute; hay tantos cristianos en la actualidad que est&aacute;n espiritualmente impotentes y sin fruto, en comparaci&oacute;n con los cristianos del primer siglo? Creo que la respuesta es la falta de fe.</p>

<p>Nuestro Se&ntilde;or Jesucristo, como una demostraci&oacute;n de su amorosa preocupaci&oacute;n y compasi&oacute;n por el mundo, nos ha encomendado ir y compartir las Buenas Nuevas del Evangelio por todas partes. Pero nosotros nos aglomeramos sin nada de fe en nuestras peque&ntilde;as reuniones de oraci&oacute;n y hablamos de temas superficiales y secundarios.</p>

<p>Luego, nos alegramos de obtener en el nombre de Cristo, s&oacute;lo lo que podemos alcanzar por medio de nuestro propio intelecto, elocuencia y habilidades organizacionales. En vez de acudir al Dios Todopoderoso del Universo y creer en &Eacute;l, aun en relaci&oacute;n con lo sobrenatural, nosotros caminamos sin prop&oacute;sito, espiritualmente impotentes, sin fe y sin fruto.</p>

<p>Los disc&iacute;pulos de Jesucristo conoc&iacute;an y oraban al Creador, al Dios Omnipotente. En respuesta a sus oraciones y a sus vidas dedicadas, &Eacute;l los utiliz&oacute; como embajadores de Cristo para revolucionar el perverso Imperio Romano. Lea su oraci&oacute;n registrada en Hechos 4:</p>

<div class="quote-left">Soberano Se&ntilde;or, t&uacute; eres el Dios que hiciste el cielo y la tierra,&nbsp; el mar y todo lo que en ellos hay; que por la boca de David tu siervo dijiste:&nbsp; &iquest;Por qu&eacute; se amotinan las gentes, y los pueblos piensan cosas vanas? Se reunieron los reyes de la tierra, y los pr&iacute;ncipes se juntaron en uno contra el Se&ntilde;or, y contra su Cristo.</div>

<p>Porque verdaderamente se unieron en esta ciudad contra tu santo Hijo Jes&uacute;s, a quien ungiste, Herodes y Poncio Pilato, con los gentiles y el pueblo de Israel, para hacer cuanto tu mano y tu consejo hab&iacute;an antes determinado que sucediera. Y ahora, Se&ntilde;or mira sus amenazas, y concede a tus siervos que con todo denuedo hablen tu palabra, mientras extiendes tu mano para que se hagan sanidades y se&ntilde;ales y prodigios mediante el nombre de tu santo Hijo Jes&uacute;s.</p>

<p>&iquest;Acaso es extra&ntilde;o que Dios utilizara a los cristianos del primer siglo para cambiar el curso de la historia? Ellos conoc&iacute;an y serv&iacute;an al amoroso y Todopoderoso Dios soberano del universo. El Dios a quienes ustedes adoran y sirven, es el mismo Dios y Padre omnisciente, omnipotente y amoroso a quien ellos amaban y serv&iacute;an. Su poder no ha cambiado, El sigue haciendo por medio nuestro, lo mismo que hizo a trav&eacute;s de esos creyentes del primer siglo.</p>

<p>Por m&aacute;s de un a&ntilde;o, antes que la Cruzada Estudiantil y Profesional para Cristo comenzara sus actividades, dirig&iacute; a grupos de la iglesia en la evangelizaci&oacute;n de los dormitorios de universidades, fraternidades y clubes femeninos en el &aacute;rea de Los &Aacute;ngeles, California; sin embargo, de lo que yo recuerdo, nadie comprometi&oacute; su vida con Cristo en ninguna de esas reuniones.</p>

<p>Sin embargo, cuando Dios nos llam&oacute; a este ministerio, que comenz&oacute; en la primavera de 1951, inmediatamente iniciamos una cadena de oraci&oacute;n las veinticuatro horas del d&iacute;a y dividimos el tiempo de oraci&oacute;n en noventa y seis periodos de quince minutos.</p>

<p>Muchos cristianos dedicaban quince minutos diarios en oraci&oacute;n a favor de nuestro nuevo ministerio en la Universidad de California en Los &Aacute;ngeles.</p>

<p>Durante nuestra primera reuni&oacute;n, en un club femenino en UCLA, despu&eacute;s que comenzara la cadena de oraci&oacute;n, m&aacute;s de la mitad de las sesenta jovencitas que estaban presentes expresaron su deseo de aceptar a Cristo. En los siguientes meses, m&aacute;s de 250 estudiantes de esa universidad, incluyendo el presidente del cuerpo estudiantil, el editor del peri&oacute;dico y varios de los mejores atletas, dedicaron sus vidas a Jesucristo. La influencia de ellos fue tan grande que en el sistema de sonido de la universidad comenzaron a tocar himnos cristianos &iexcl;todas las noches!</p>

<p>Esta demostraci&oacute;n sin precedentes de las bendiciones de Dios no ocurri&oacute; por accidente. Dios estaba respondiendo a las oraciones de muchos de Sus hijos. Sus bendiciones contin&uacute;an actualmente conforme &Eacute;l ha querido seguir usando a la Cruzada Estudiantil y Profesional para Cristo, para ayudar a conducir a millones de personas a nuestro Salvador, y para formar disc&iacute;pulos en los principales pa&iacute;ses del mundo. Nuestro mayor &eacute;nfasis contin&uacute;a estando en la vida de oraci&oacute;n</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ RESPUESTAS A PREGUNTAS SOBRE LA ORACI&Oacute;N</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>A lo largo de estos a&ntilde;os hemos aprendido que el cristiano promedio no sabe c&oacute;mo orar. Un amigo que hab&iacute;a sido cristiano por m&aacute;s de cincuenta a&ntilde;os me dijo, &ldquo;Yo nunca hago oraci&oacute;n en p&uacute;blico, y s&eacute; muy poco acerca de la oraci&oacute;n o sobre c&oacute;mo orar.&rdquo;</p>

<p>Debido a que tantos cristianos (nuevos y viejos) ignoran muchas verdades sobre la oraci&oacute;n, me gustar&iacute;a compartirle algunos principios b&aacute;sicos, y responder ciertas preguntas fundamentales acerca de la oraci&oacute;n.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h3>+ 1. &iquest;Qu&eacute; es la oraci&oacute;n?</h3></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>Alguien dijo, &ldquo;La oraci&oacute;n es un di&aacute;logo entre dos personas que se aman mutuamente, Dios y el hombre.&rdquo; Dicho en otras palabras, la oraci&oacute;n es comunicarse con Dios. Todo cristiano tiene una l&iacute;nea directa de comunicaci&oacute;n con Dios, disponible en todo tiempo. Sin embargo, la mayor&iacute;a de los cristianos nunca &ldquo;descuelgan el tel&eacute;fono&rdquo; y a menudo olvidan que la l&iacute;nea existe, hasta que surge una emergencia.</p>

<p>La oraci&oacute;n es mucho m&aacute;s que palabras. Es una expresi&oacute;n del coraz&oacute;n hacia Dios. Es una experiencia, una relaci&oacute;n, no una actividad.</p>

<p>Como hijo de Dios, usted est&aacute; invitado a venir ante Su trono. &ldquo;Por tanto, teniendo un gran sumo sacerdote que traspas&oacute; los cielos, Jes&uacute;s el Hijo de Dios&rdquo; escribe Pablo, &ldquo;acerqu&eacute;monos, pues, confiadamente al trono de la gracia, para alcanzar misericordia y hallar gracia para el oportuno socorro.&rdquo;</p>

<p>Ya que usted habla en oraci&oacute;n con el Rey de reyes y Se&ntilde;or de se&ntilde;ores, el Creador del cielo y de la tierra, usted llega a Su presencia con reverencia. Pero &Eacute;l es tambi&eacute;n su amoroso Padre Celestial, quien lo cuida y se deleita en la comuni&oacute;n con usted. Por lo tanto usted puede entrar en su presencia con un coraz&oacute;n tranquilo y gozoso, sabiendo que Dios lo ama m&aacute;s de lo que cualquier otra persona lo haya podido amar o lo llegue a amar.</p>

<p>Para m&iacute;, la verdadera oraci&oacute;n es sencillamente comunicarse con Dios, invit&aacute;ndolo a conversar con usted, as&iacute; como usted conversa con &Eacute;l. Este concepto no es todo acerca de la oraci&oacute;n, pero es lo b&aacute;sico en una oraci&oacute;n verdadera.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h3>+ 2. &iquest;Qui&eacute;n puede orar?</h3></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>Todos pueden orar. Sin embargo, s&oacute;lo los que caminan en fe y obediencia a Cristo pueden esperar respuesta a sus oraciones. En la v&iacute;spera de Su crucifixi&oacute;n, Jes&uacute;s prometi&oacute; a los suyos, &ldquo;si algo pidi&eacute;reis en mi nombre, yo lo har&eacute;.&rdquo;</p>

<p>El hombre hace oraci&oacute;n instintivamente siempre que se enfrenta a una tragedia, al sufrimiento, a la tristeza o al peligro, aunque no sea m&aacute;s que a dioses falsos hechos de madera y piedra, o fruto de su propia imaginaci&oacute;n pecaminosa.</p>

<p>Por ello debemos advertir de un peligro muy serio. Las personas siempre asimilan el car&aacute;cter moral de los objetos que adoran. Los que adoran a los dioses de la lujuria, por ejemplo, se vuelven moralmente degenerados. Los que adoran a los dioses sanguinarios, del fuego y de la guerra, se vuelven s&aacute;dicos, crueles y agresivos. Los que reverencian a los dioses del materialismo, se vuelven codiciosos y egoc&eacute;ntricos. La oraci&oacute;n dirigida a algo o a alguien que no sea Dios por medio de nuestro Se&ntilde;or Jesucristo, est&aacute; prohibida. La Palabra de Dios declara:</p>

<div class="quote-left">Profesando ser sabios se hicieron necios, y cambiaron la gloria del Dios incorruptible en semejanza de imagen de hombre corruptible, de aves, de cuadr&uacute;pedos y de reptiles. Por lo cual tambi&eacute;n Dios los entreg&oacute; a la inmundicia, en la concupiscencia de sus corazones...</div>

<p>Pablo escribe que &ldquo;sin fe es imposible agradar a Dios; porque es necesario que el que se acerca a Dios crea que le hay, y que es galardonador de los que le buscan.&rdquo;</p>

<p>Al venir a Cristo y al adorarlo, usted va siendo cambiado a Su imagen:</p>

<div class="quote-left">Por tanto, nosotros todos, mirando a cara descubierta como en un espejo la gloria del Se&ntilde;or, somos transformados de gloria en gloria en la misma imagen, como por el Esp&iacute;ritu del Se&ntilde;or. Esto explica el &eacute;nfasis b&iacute;blico que hay en la adoraci&oacute;n y la oraci&oacute;n al &nbsp;&uacute;nico Dios verdadero, justo, santo y amoroso.</div>

<p>De acuerdo con las Escrituras, &ldquo;Porque hay un solo Dios, y un solo mediador entre Dios y los hombres, Jesucristo hombre, el cual se dio a s&iacute; mismo en rescate por todos...&rdquo;</p>

<p>El mismo Jes&uacute;s dijo que era el &uacute;nico camino para llegar a Dios. El dijo, &ldquo;Yo soy el camino, y la verdad, y la vida; nadie viene al Padre sino por m&iacute;.&rdquo;</p>

<p>&iquest;Le parece esta afirmaci&oacute;n demasiado exclusivista? Realmente no lo es. Jesucristo vino a morir por todas las personas del mundo. El promete descanso para todos los que est&eacute;n cansados y agobiados.</p>

<p>Muchas personas que han ignorado a Dios toda su vida, al final de &eacute;sta llegan a experimentar situaciones dif&iacute;ciles, pero se sienten demasiado avergonzados para acudir a &Eacute;l en oraci&oacute;n. Estas personas razonan, &ldquo;he ignorado a Dios toda mi vida - ahora es demasiado tarde.&rdquo;</p>

<p>No se sienta as&iacute;. Dios escucha la oraci&oacute;n de toda persona arrepentida. &Eacute;l nos prob&oacute; Su amor enviando a Cristo a morir por nosotros cuando todav&iacute;a est&aacute;bamos en nuestros pecados. Nada de lo que hagamos conseguir&aacute; que Dios deje amarnos.</p>

<p>Sin embargo, usted a&uacute;n no puede esperar que Dios responda sus oraciones, a menos que venga a &Eacute;l en el nombre y autoridad del Se&ntilde;or Jes&uacute;s como su &uacute;nico mediador, y confiese sus pecados y le reciba como Su Salvador y Su Se&ntilde;or.</p>

<p><strong>Los que tienen corazones limpios pueden orar.</strong> Usted no s&oacute;lo debe pedir en el nombre de Jes&uacute;s, sino que tambi&eacute;n debe venir con un coraz&oacute;n limpio. El salmista dice, &ldquo;Si en mi coraz&oacute;n hubiese yo mirado a la iniquidad. El Se&ntilde;or no me habr&iacute;a escuchado.&rdquo;</p>

<p>Por lo tanto, usted no puede esperar que Dios conteste sus oraciones si hay alg&uacute;n pecado sin confesar en su vida. As&iacute; como la omisi&oacute;n de un ingrediente en una receta de cocina puede hacer que &eacute;sta fracase, tambi&eacute;n el omitir confesar alg&uacute;n pecado puede hacer fracasar su oraci&oacute;n.</p>

<p><strong>Los que tienen un esp&iacute;ritu perdonador pueden orar.</strong> Uno de los m&aacute;s frecuentes impedimentos para la oraci&oacute;n es un esp&iacute;ritu no perdonador. Jes&uacute;s dijo, &ldquo;Y cuando est&eacute;is orando, perdonad, si ten&eacute;is algo contra alguno, para que tambi&eacute;n vuestro Padre que est&aacute; en los cielos os perdone a vosotros vuestras ofensas.&rdquo;</p>

<p>En la oraci&oacute;n de nuestro Se&ntilde;or, las palabras &ldquo;dar&rdquo; y &ldquo;perdonar&rdquo; se presentan en el mismo contexto: &ldquo;El pan nuestro de cada d&iacute;a, d&aacute;noslo hoy; y perd&oacute;nanos nuestras deudas, como tambi&eacute;n nosotros perdonamos a nuestros deudores.&rdquo;</p>

<p>Ninguna oraci&oacute;n, excepto la oraci&oacute;n de confesi&oacute;n, recibir&aacute; respuesta de Dios, a menos que provenga de un coraz&oacute;n perdonador y libre de amargura.</p>

<p>La posici&oacute;n tan com&uacute;n, &ldquo;Bueno, yo perdono pero no olvido,&rdquo; s&oacute;lo har&aacute; que sus oraciones fracasen. &iquest;Qu&eacute; suceder&iacute;a si &eacute;sa fuera la actitud de Dios? Su amor ha impulsado un maravilloso olvido por el cual Dios ha prometido dejar atr&aacute;s todos sus pecados y no recordarlos jam&aacute;s. Usted y yo debemos venir a Dios con un coraz&oacute;n perdonador si queremos recibir la herencia cristiana del poder en la oraci&oacute;n.</p>

<p><strong>Los que tienen fe pueden orar.</strong> Usted tambi&eacute;n debe tener un coraz&oacute;n que cree si quiere que sus oraciones sean respondidas. El mismo Se&ntilde;or fue quien dijo, &ldquo;Toda potestad me es dada en el cielo y en la tierra&rdquo;, y &ldquo;yo estoy con vosotros todos los d&iacute;as hasta el fin del mundo.&rdquo;</p>

<p>Tambi&eacute;n dice, &ldquo;si algo pidi&eacute;reis en mi nombre, yo lo har&eacute;&rdquo;, y &ldquo;todo lo que pidi&eacute;reis en oraci&oacute;n, creyendo, lo recibir&eacute;is&rdquo;, y &ldquo;conforme a vuestra fe os sea hecho.&rdquo;</p>

<p>Sin embargo, muy pocos de nosotros tomamos en serio estas palabras, y pocos nos atrevemos a pedir lo que Dios generosamente nos ha prometido.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h3>+ 3. &iquest;Por qu&eacute; orar?</h3></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>Usted debe orar porque Dios le ordena orar. En el Nuevo Testamento hay muchos mandatos a orar.</p>

<p>Aqu&iacute; hay algunas:</p>

<ul>
	<li>Ore sin cesar.</li>
	<li>Ore con acci&oacute;n de gracias. Ore en el Esp&iacute;ritu.</li>
	<li>Ore siempre y no desmaye.&nbsp;Ore por todos los que est&aacute;n en autoridad.</li>
	<li>Vele y ore.</li>
	<li>Ore por elocuencia.</li>
	<li>Ore por valent&iacute;a.</li>
</ul>

<p><strong>Usted debe orar porque nuestro Se&ntilde;or nos ha dado ese ejemplo</strong>. Jesucristo, el mismo Hijo de Dios, era obediente en relaci&oacute;n a la oraci&oacute;n. Aunque Su d&iacute;a, desde la ma&ntilde;ana hasta la noche, estaba repleto de fuertes presiones y responsabilidades, hablarle a las multitudes, sanar a los enfermos, reunirse personalmente con algunos, viajar y capacitar a sus disc&iacute;pulos, &Eacute;l hizo de la oraci&oacute;n lo m&aacute;s importante. &iexcl;Si Jes&uacute;s era tan dependiente de la comuni&oacute;n con su Padre, por medio de la oraci&oacute;n a solas con &Eacute;l, con mayor raz&oacute;n usted y yo debemos pasar m&aacute;s tiempo a solas con Dios!</p>

<p><strong>Usted debe orar porque los disc&iacute;pulos y muchos otros cristianos nos han dado ese ejemplo</strong>. Las vidas de los disc&iacute;pulos y las biograf&iacute;as de los cristianos que han sido usados poderosamente por Dios a trav&eacute;s de los siglos, nos dan un poderoso testimonio sobre la necesidad de la oraci&oacute;n. Ellos, tambi&eacute;n, son ejemplo de obediencia al mandato de orar.</p>

<p>Yo no estoy sugiriendo que cada d&iacute;a deba pasarse largas horas en oraci&oacute;n, aunque algunos s&iacute; son llamados a ejercer este alto privilegio. Pero usted puede &ldquo;orar sin cesar&rdquo; present&aacute;ndole todo a Dios en oraci&oacute;n. Aquellos que obedecen la orden de Dios de orar, son poderosamente bendecidos y grandemente usados por Dios.</p>

<p><strong>Usted debe orar para tener comuni&oacute;n con Dios.</strong> Dios espera ansiosamente que usted se acerque a &Eacute;l en oraci&oacute;n. El libro de los Proverbios nos dice: &ldquo;M&aacute;s de la oraci&oacute;n de los rectos es su gozo.&rdquo;</p>

<p>Esta realidad deber&iacute;a motivarlo a pasar m&aacute;s tiempo con nuestro Se&ntilde;or, porque usted desea agradarlo y deleitarlo. Mis propios hijos me ayudan a darme cuenta de la importancia de este hecho. No importa cu&aacute;n ocupado est&eacute;, cuando mis hijos Zacar&iacute;as y Bradley se acercan para hablar conmigo, con mucho gusto dejo todo a un lado s&oacute;lo para tener comuni&oacute;n con ellos. Yo anhelo y procuro estar con ellos, y siempre me muestro agradecido cuando ellos quieren estar conmigo.</p>

<p>Un d&iacute;a hace muchos a&ntilde;os, yo estaba estudiando en casa, cuando Zacar&iacute;as apareci&oacute; con un mont&oacute;n de libros y se sent&oacute; frente a m&iacute;. Aunque ninguno de nosotros habl&oacute; por un rato, yo sent&iacute; el candor de su amor.</p>

<p>Finalmente romp&iacute; el silencio, dici&eacute;ndole, &ldquo;Zac, quiero que sepas cu&aacute;nto significa para m&iacute; que t&uacute; vengas y te sientes al lado m&iacute;o.&rdquo;</p>

<p>&Eacute;l contest&oacute;, &ldquo;Papi, por eso vine. Yo s&oacute;lo quiero estar cerca de ti.&rdquo;</p>

<p>Por primera vez en mi vida comprend&iacute; realmente c&oacute;mo el gran coraz&oacute;n de nuestro amoroso Dios se goza en nosotros y anhela nuestra comuni&oacute;n.</p>

<p>Usted debe orar para comunicarse con Dios. El dijo, &ldquo;clama a m&iacute; y yo te responder&eacute;, y te ense&ntilde;ar&eacute; cosas grandes y ocultas que t&uacute; no conoces.&rdquo;</p>

<p>La oraci&oacute;n no s&oacute;lo es una &ldquo;puerta de escape&rdquo; para salir de un problema, deleitarse a s&iacute; mismo, o lograr ciertos fines ego&iacute;stas. Es su l&iacute;nea de comunicaci&oacute;n con Dios. Como Su hijo, usted tiene acceso directo a Su trono. Dios le ama tanto que &Eacute;l mismo se puso a su disposici&oacute;n en todo momento. Por medio de la oraci&oacute;n usted le habla a Dios y &Eacute;l le responde.</p>

<p>Usted debe orar para recibir alimento espiritual. As&iacute; como un ni&ntilde;o necesita alimento para crecer f&iacute;sicamente, usted necesita alimento para crecer espiritualmente. Usted puede dejar de comer un d&iacute;a y no sentir&aacute; ning&uacute;n efecto, pero si deja de comer por una semana, comenzar&aacute; a sentirse d&eacute;bil y enfermo. Lo mismo sucede con su vida espiritual.</p>

<p>Puede pasar un d&iacute;a sin nutrirse de la Palabra de Dios o sin orar, sin que se vea ning&uacute;n resultado aparente, pero si contin&uacute;a con esta pr&aacute;ctica, se ver&aacute; desnutrido y perder&aacute; la fortaleza para vivir una vida victoriosa, y carecer&aacute; del valor necesario para dar un testimonio din&aacute;mico para Cristo.</p>

<p>Usted debe orar para obtener resultados. La oraci&oacute;n sincera y que se basa en la Biblia, cambia las cosas. Tambi&eacute;n cambia a los que oran para que Dios tenga la libertad de revelarles Su voluntad. La oraci&oacute;n tambi&eacute;n libera el gran poder de Dios para cambiar el curso de la naturaleza, a las personas y a las naciones. Las oraciones fieles de cristianos consagrados, llenos del Esp&iacute;ritu Santo, han comprobado esto muchas veces.</p>

<p>Los edificios ubicados en Arrowhead Springs, California, lugar de nuestra primera oficina internacional, incluyendo la casa donde viv&iacute;amos mi esposa Vonette y yo, estuvieron muy cerca de ser devorados por las llamas durante un terrible incendio ocurrido hace algunos a&ntilde;os. Siete de los edificios fueron destruidos.</p>

<p>Despu&eacute;s de evacuar a las personas, un grupo de nuestros obreros que permanecieron luchando contra el fuego, oraron con gran ah&iacute;nco durante toda una hora de la tarde para que Dios cambiara los vientos de m&aacute;s de 120 Kms. por hora en la direcci&oacute;n opuesta a los edificios. Precisamente, mientras ellos estaban orando, uno de los bomberos observ&oacute; una bandera que ondeaba violentamente movida por el viento. Repentinamente, la bandera comenz&oacute; a darse vuelta y en cuesti&oacute;n de segundos estaba movi&eacute;ndose en la direcci&oacute;n opuesta. Todos ellos fueron testigos de lo que Dios hab&iacute;a hecho ante sus propios ojos.</p>

<p>Un mensaje urgente nos hab&iacute;a llegado a Vonette y a m&iacute; en esa hora diciendo que las llamas hab&iacute;an envuelto todo el terreno de nuestra base de operaciones, incluyendo nuestra casa. Nosotros tambi&eacute;n nos arrodillamos y comenzamos a orar para que Dios cambiara la direcci&oacute;n de los vientos.</p>

<p>Aquellos que estaban luchando para controlar el fuego informaron que el calor y el humo se hicieron tan intensos, que hasta ten&iacute;an que acostarse en el suelo para poder respirar, mientras lanzaban agua sobre los edificios. Luego de aproximadamente una hora, llegaron al punto de tener que abandonar nuestra casa, a las llamas que ya la estaban rodeando por los tres costados, cuando de pronto los vientos milagrosamente cambiaron de direcci&oacute;n y se llevaron las llamas hacia otro lado. Podr&iacute;a relatarle muchas otras repuestas dram&aacute;ticas a la oraci&oacute;n como &eacute;sta. S&iacute;, orar verdaderamente cambia las cosas.</p>

<p>Usted debe orar para ser un testigo fruct&iacute;fero de Cristo. En el orden divino, lo primero es hablarle a Dios acerca de los hombres y luego hablarle a los hombres acerca de Dios. Testificar sencillamente es reunir los resultados de la oraci&oacute;n, la oraci&oacute;n del que habla de Cristo y las oraciones de otros. Yo estoy convencido que el factor m&aacute;s importante en mi conversi&oacute;n al cristianismo fueron las oraciones de mi santa madre.</p>

<p>&iquest;A qui&eacute;n se le debe orar?</p>

<p>Usted debe orar al Padre en el nombre del Se&ntilde;or Jesucristo a trav&eacute;s del ministerio del Esp&iacute;ritu Santo. Jes&uacute;s dice:</p>

<div class="quote-left">Mas t&uacute;, cuando ores, entra en tu aposento, y cerrada la puerta, ora a tu Padre que est&aacute; en secreto; y tu Padre que ve en lo secreto &laquo; te recompensar&aacute; en p&uacute;blico.</div>

<p>Sus oraciones son validadas por Jesucristo e interpretadas a Dios el Padre por el Esp&iacute;ritu Santo. Pero como Dios es un Dios manifestado en tres personas, es perfectamente aceptable orar a Jes&uacute;s o al Esp&iacute;ritu Santo. No hay celos entre las tres personas de la Trinidad. Pero el modelo b&iacute;blico que Jes&uacute;s ense&ntilde;&oacute; est&aacute; dirigido al Padre.</p>

<p>Es estimulante y muy importante saber que cuando est&aacute; orando, el Se&ntilde;or Jes&uacute;s y el Esp&iacute;ritu Santo est&aacute;n intercediendo por usted. Pablo dice en Romanos 8:34, &ldquo;Cristo es el que muri&oacute;; m&aacute;s a&uacute;n, el que tambi&eacute;n resucit&oacute;, el que adem&aacute;s est&aacute; a la diestra de Dios, el que tambi&eacute;n intercede por nosotros.&rdquo; Antes, en Romanos 8 Pablo escribe, &ldquo;Y de igual manera el Esp&iacute;ritu nos ayuda en nuestra debilidad; pues qu&eacute; hemos de pedir como conviene, no lo sabemos, pero el Esp&iacute;ritu mismo intercede por nosotros con gemidos indecibles.&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h3>+ 4. &iquest;Cu&aacute;ndo se debe orar?</h3></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p>En cierto sentido hago oraci&oacute;n sin cesar, y hablo con Dios cientos de veces al d&iacute;a acerca de todo. Yo comienzo mi d&iacute;a de rodillas en oraci&oacute;n, adorando y alabando a nuestro Creador, el misericordioso Dios y Padre amoroso. Reconozco a Jesucristo como mi Se&ntilde;or y Maestro. Por fe, como un acto de la voluntad, me apropio de la plenitud del Esp&iacute;ritu Santo. Pido sabidur&iacute;a en relaci&oacute;n con las numerosas decisiones que debo hacer cada d&iacute;a. Pido por la&nbsp;salvaci&oacute;n de amigos y extra&ntilde;os, por sanidad de las enfermedades, y por las necesidades espirituales y materiales del ministerio de la Cruzada Estudiantil y Profesional para Cristo, as&iacute; como tambi&eacute;n por las necesidades de varios obreros y l&iacute;deres de otras organizaciones cristianas y sus respectivos ministerios.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc9-1.png" style="float:right; width:50%" />Hago oraci&oacute;n por nuestros l&iacute;deres y por aquellos cuya autoridad est&aacute; sobre nosotros. Inclusive pido por peque&ntilde;os asuntos personales que s&oacute;lo me conciernen a m&iacute;. &iexcl;Y Dios responde!</p>

<p>Despu&eacute;s, me gusta pasar todo el tiempo posible leyendo y meditando en la Palabra de Dios. A menudo me arrodillo en silencio antes de abrir mi Biblia y hablo con Dios. Le pido al Esp&iacute;ritu Santo, quien inspir&oacute; Sus escritos, a hacer que mi lectura sea significativa y edificante para m&iacute;.</p>

<p>Mientras leo, me detengo para agradecerle a Dios por Su salvaci&oacute;n y por Su amorosa provisi&oacute;n, confieso todo pecado que haya en mi vida que la Biblia pudiera revelar, le pido la valent&iacute;a y la fe que sus ap&oacute;stoles mostraban y le agradezco por las nuevas ideas que provienen de su estrategia divina para alcanzar el mundo con las Buenas Nuevas de Su amor y perd&oacute;n, por medio de Jesucristo nuestro Salvador. Frecuentemente hago una pausa para orar por algunas verdades especiales o para apropiar alguna promesa.</p>

<p>Por la noche me arrodillo de nuevo para adorar a mi Se&ntilde;or, leo Su Palabra y le pregunto, &ldquo;Se&ntilde;or, &iquest;hay algo en m&iacute; que te desagrada, algo que debo confesar?&rdquo; Si el Esp&iacute;ritu Santo me revela alg&uacute;n pecado o debilidad, lo confieso y me apropio por fe de la victoria de Dios para mi vida. As&iacute;, yo s&eacute; que mis &uacute;ltimos pensamientos conscientes son del Se&ntilde;or, y que mis pensamientos subconscientes continuar&aacute;n ador&aacute;ndolo toda la noche. Luego, cuando me levante, mis primeros pensamientos ser&aacute;n nuevamente para nuestro amado Se&ntilde;or.</p>

<p>Los grupos de oraci&oacute;n tambi&eacute;n son fundamentales en la vida cristiana y, sin embargo, pocas reuniones son tan aburridas, tan poco atractivas y cansadoras como las de los t&iacute;picos grupos de oraci&oacute;n. La raz&oacute;n es sencilla. La mayor&iacute;a de los cristianos involucrados en el grupo no pasan tiempo con Dios en adoraci&oacute;n y en oraci&oacute;n privada; consecuentemente, no tienen nada que decirle a Dios en p&uacute;blico, excepto oraciones memorizadas aprendidas de otros cristianos, que han sido transmitidas de generaci&oacute;n en generaci&oacute;n.</p>

<p>Cu&aacute;n emocionante es ense&ntilde;ar a otros a hablar con Dios en grupo, como si &Eacute;l verdaderamente estuviera presente, como en efecto lo est&aacute;. Esto permite una oraci&oacute;n espont&aacute;nea, dirigida por el Esp&iacute;ritu Santo, en la cual se eleva ante su presencia una alabanza o petici&oacute;n a la vez, conforme el Esp&iacute;ritu trae temas a la mente. Una buena manera de orar en los grupos peque&ntilde;os, es orar por medio de pasajes favoritos de la Biblia, donde cada persona sigue vers&iacute;culo por vers&iacute;culo, y hace una oraci&oacute;n de aproximadamente treinta segundos o menos. Pero hay tiempos especiales de oraci&oacute;n ungida, dirigida por el Esp&iacute;ritu Santo, que pueden durar horas, que pueden parecer s&oacute;lo minutos.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h3>+ 5. &iquest;Qu&eacute; se debe incluir en una oraci&oacute;n?</h3></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p>En una oraci&oacute;n se deben incluir siempre ciertos elementos b&aacute;sico<img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc9-4(1).png" style="width:100%" /></p>

<p>Sin embargo, esto es s&oacute;lo una gu&iacute;a y no una secuencia r&iacute;gida que usted deba seguir siempre en todas sus oraciones.</p>

<p>Consideremos cada una de estas palabras.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary7" class="summary"><h4>+ Adoraci&oacute;n.</h4></div>
<div class="collapsed" id ="Text7">
<!-- end default revealSummary -->

<p>Adorar a Dios es exaltarle y alabarle, honrarlo y entronizarlo en su coraz&oacute;n, su mente y con sus labios. La oraci&oacute;n es a menudo confundida con un elemento vago y m&iacute;stico en la relaci&oacute;n de una persona con un Dios santo al que hay que temerle. Pero la Palabra de Dios no ense&ntilde;a eso. Al contrario, ense&ntilde;a que Dios, nuestro Padre, desea tener comuni&oacute;n con sus Hijos.</p>

<p>La relaci&oacute;n con su Padre Celestial deber&iacute;a ser de confianza, fe y obediencia absoluta. De igual modo, su oraci&oacute;n deber&iacute;a expresar su confianza completa en &Eacute;l y reflejar su fe en que &Eacute;l lo escucha. Como resultado, su acercamiento a &Eacute;l ser&aacute; de adoraci&oacute;n y alabanza con reverencia y temor respetuoso de amor y gratitud.</p>

<p>Leer Salmos de alabanza en voz alta y otras porciones similares de la Biblia puede enriquecer mucho su tiempo de oraci&oacute;n. Un coraz&oacute;n fr&iacute;o e ingrato puede ser encendido pronto y la alabanza a Dios surgir&aacute; f&aacute;cilmente.</p>

<p>Personalmente, me siento inc&oacute;modo cuando se hace referencia a Dios como &ldquo;el que est&aacute; all&aacute; arriba,&rdquo; porque el Dios al cual adoro es Aqu&eacute;l al que tambi&eacute;n honro y reverencio. &Eacute;l es el Dios Omnipotente, santo, creador de todas las cosas. Sin embargo, yo me siento en perfecta libertad de abrirle mi coraz&oacute;n, compartir las necesidades m&aacute;s &iacute;ntimas del coraz&oacute;n, sabiendo que &Eacute;l no s&oacute;lo es el Dios santo y omnipotente, sino tambi&eacute;n mi amoroso Padre celestial. El me ama m&aacute;s, me comprende mejor y cree m&aacute;s en m&iacute;, que cualquier otra persona en el mundo.</p>

<p>Yo hago mi oraci&oacute;n en todas las posturas imaginables: con los ojos abiertos o cerrados, mientras camino o cuando estoy acostado, audible o silenciosamente. Pero mi postura favorita es de rodillas. Lo primero que hago cuando me levanto por la ma&ntilde;ana es arrodillarme y reconocer que el Se&ntilde;or Jes&uacute;s tiene el control de mi vida, y agradecerle porque &Eacute;l me ama, y porque vive Su vida en y a trav&eacute;s de m&iacute; en todo el poder de su resurrecci&oacute;n y presencia.</p>

<p>Yo le invito a continuar Su ministerio de &ldquo;buscar y salvar a los perdidos&rdquo; a trav&eacute;s de m&iacute;, y a utilizarme como &Eacute;l quiera.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary8" class="summary"><h4>+ Confesi&oacute;n.</h4></div>
<div class="collapsed" id ="Text8">
<!-- end default revealSummary -->

<p>El cristiano que necesita restaurar su comuni&oacute;n con Cristo deber&iacute;a comenzar con la confesi&oacute;n. El profeta Isa&iacute;as declara:</p>

<div class="quote-left">He aqu&iacute; que no se ha acortado la mano de Jehov&aacute; para salvar, ni se ha agravado su o&iacute;do para o&iacute;r; pero vuestras iniquidades han hecho divisi&oacute;n entre vosotros y vuestro Dios, y vuestros pecados han hecho ocultar de vosotros su rostro para no o&iacute;r.</div>

<p>Si su oraci&oacute;n habitual comienza con una devota adoraci&oacute;n a Dios, el Esp&iacute;ritu Santo le revelar&aacute; cualquier pecado en su vida que necesite ser confesado. Al percibir a Dios en Su pureza, Su santidad y Su amor, usted ser&aacute; consciente de su propio pecado y reconocer&aacute; que es indigno delante de &Eacute;l. Conforme el Esp&iacute;ritu Santo le revele sus pecados, usted deber&aacute; confesarlos.</p>

<p>Sea completamente transparente ante Dios. No utilice una m&aacute;scara, ni ofrezca una actuaci&oacute;n teatral. &Eacute;l ya lo sabe todo sobre usted. Por lo tanto, d&iacute;gale exactamente c&oacute;mo se siente. Si usted no se siente espiritual, d&iacute;gaselo. Si su coraz&oacute;n est&aacute; fr&iacute;o, confi&eacute;selo. Si ha sido desobediente, confi&eacute;selo y reciba Su perd&oacute;n y limpieza, la cual restaurar&aacute; su comuni&oacute;n con El.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary9" class="summary"><h4>+ Agradecimiento</h4></div>
<div class="collapsed" id ="Text9">
<!-- end default revealSummary -->

<p>Nada agrada m&aacute;s a Dios que la expresi&oacute;n consistente de su fe. Y no hay mejor forma de demostrar su fe que diciendo, &ldquo;Gracias.&rdquo;</p>

<p>El escritor de Hebreos aclara que sin fe es imposible agradar a Dios.</p>

<p>La Palabra de Dios ordena, &ldquo;Dad gracias en todo&rdquo;, porque &ldquo;esta es la voluntad de Dios para con vosotros en Cristo Jes&uacute;s.&rdquo; No dar gracias, es desobedecer.</p>

<p>Si usted est&aacute; lleno del Esp&iacute;ritu de Dios y reconoce que &Eacute;l lo controla todo, puede agradecerle no s&oacute;lo por las muchas bendiciones de cada d&iacute;a, sino tambi&eacute;n por los problemas y adversidades. El ap&oacute;stol Santiago dice, &ldquo;Tened por sumo gozo cuando os hall&eacute;is en diversas pruebas, sabiendo que la prueba de vuestra fe produce paciencia.&rdquo;</p>

<p>El ap&oacute;stol Pablo escribe, &ldquo;Y no s&oacute;lo esto, sino que tambi&eacute;n nos gloriamos en las tribulaciones sabiendo que la tribulaci&oacute;n produce paciencia; y la paciencia, prueba, y la prueba, esperanza.&rdquo;</p>

<p>&iquest;Puedo sugerirle que, en silencio, medite en todas sus bendiciones diarias, como por ejemplo, su salvaci&oacute;n por conocer a Cristo, la seguridad de que sus pecados han sido perdonados, la oportunidad de servir a Cristo, la oportunidad de asistir a la escuela, su buena salud, su familia, por el trabajo, la comida y la ropa? Agrad&eacute;zcale a Dios&nbsp;por cada una de estas bendiciones.</p>

<p>Luego, haga una lista de cada problema, desilusi&oacute;n, dolor o adversidad que le preocupe, y agrad&eacute;zcale a Dios a pesar de todo, tal como se le ha ordenado. Dar gracias demuestra que usted realmente conf&iacute;a en Dios. Al expresar su fe usted agrada a Dios y le permite a &Eacute;l actuar en su favor; por el contrario, un esp&iacute;ritu de cr&iacute;tica, sin fe, desagrada a Dios y obstaculiza Sus esfuerzos para bendecir y enriquecer su vida y de usarla para Su gloria.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary10" class="summary"><h4>+ S&uacute;plica</h4></div>
<div class="collapsed" id ="Text10">
<!-- end default revealSummary -->

<p>Para muchos cristianos, la oraci&oacute;n es como la vitrina de una tienda, pasan mucho tiempo mirando pero nunca compran nada. La s&uacute;plica incluye peticiones por nuestra propias necesidades e intercesi&oacute;n por otros. Usted puede orar en forma general y tambi&eacute;n espec&iacute;fica. El ap&oacute;stol Pablo advierte:</p>

<div class="quote-left">Por nada est&eacute;is afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oraci&oacute;n y ruego, con acci&oacute;n de gracias. Y la paz de Dios, que sobrepasa todo entendimiento, guardar&aacute; vuestros &laquo; corazones y vuestros pensamientos en Cristo Jes&uacute;s</div>

<p>Conforme usted habla con Dios, ore para que su persona interior sea renovada y vivificada, que est&eacute; alerta y viva, din&aacute;mica, fresca, siempre sensible y capacitada por el Esp&iacute;ritu Santo. Ore por sus problemas, ore pidiendo sabidur&iacute;a y gu&iacute;a, ore por fortaleza para resistir la tentaci&oacute;n, ore por alivio en tiempo de tristeza, ore por todo. No hay nada demasiado grande, ni demasiado peque&ntilde;o para no traerlo ante el Se&ntilde;or.</p>

<p>Luego ore por otras personas. Los cristianos a veces no nos damos cuenta de la importancia de la intercesi&oacute;n. El ap&oacute;stol Pablo oraba continuamente por sus convertidos.</p>

<p>Tambi&eacute;n les ped&iacute;a que oraran por &eacute;l. Usted debe orar por otros cristianos y tambi&eacute;n debe animarlos a orar por usted.</p>

<p>Perm&iacute;tame ilustrarle la importancia de la oraci&oacute;n intercesora. En 1960, el levantamiento del pueblo Mau Mau sembr&oacute; el terror en Kenya, Africa. En ese tiempo, los misioneros Matt y Lora Higgens tuvieron que conducir su auto a trav&eacute;s del coraz&oacute;n del territorio Mau Mau, en su trayecto hacia Nairobi. Ellos sab&iacute;an muy bien que los nacionales de ese pa&iacute;s y misioneros, hab&iacute;an sido asesinados en forma violenta por los terroristas, precisamente en esa zona.</p>

<p>Una noche, aproximadamente a 30 kil&oacute;metros de Nairobi, su veh&iacute;culo se averi&oacute;. Matt trat&oacute; en vano de reparar el veh&iacute;culo en la oscuridad. Finalmente y con mucho temor, la pareja se encerr&oacute; en el auto e intentaron dormir. Juntos recitaron el Salmo 4:8 en voz alta, &ldquo;En paz me acostar&eacute; y asimismo dormir&eacute;; porque s&oacute;lo t&uacute;, Jehov&aacute;, me haces vivir confiado.&rdquo;</p>

<p>Cuando se despertaron, Matt repar&oacute; el auto, y pronto llegaron a Nairobi. La semana siguiente, un pastor local les cont&oacute; a los misioneros lo que hab&iacute;a pasado mientras dorm&iacute;an. Tres terroristas se hab&iacute;an acercado al autom&oacute;vil, con la intenci&oacute;n de matarlos. Pero cuando los Mau Mau vieron a diecis&eacute;is hombres rodeando al autom&oacute;vil, huyeron asustados.</p>

<p>Matt y Lora estaban emocionados y sorprendidos. &ldquo;&iquest;cu&aacute;les diecis&eacute;is hombres?&rdquo; se preguntaban.</p>

<p>Semanas despu&eacute;s, cuando regresaron a Am&eacute;rica, el resto de la historia sali&oacute; a la luz cuando un amigo les pregunt&oacute;, &ldquo;&iquest;han estado en peligro &uacute;ltimamente?&rdquo;</p>

<p>Matt le cont&oacute; sobre los Mau Mau, del problema con el auto y los diecis&eacute;is hombres. El amigo asinti&oacute; emocionado. &ldquo;El 23 de marzo,&rdquo; dijo, &ldquo;Dios puso carga en mi coraz&oacute;n por ustedes. Llam&eacute; a varios hermanos de nuestra iglesia, y nos reunimos diecis&eacute;is en una oraci&oacute;n de emergencia en su favor.&rdquo;</p>

<p>Sin lugar a dudas el cielo revelar&aacute; las innumerables ocasiones en que Dios us&oacute; la oraci&oacute;n intercesora para proteger a Su pueblo y adelantar Su reino.</p>

<p>Ore diariamente por su c&oacute;nyuge, por sus hijos y por sus padres. Luego ore por sus amigos y por sus vecinos.</p>

<p>Ore por su pastor y por los misioneros. Ore por muchos otros crisitianos a quienes Dios les ha dado responsabilidades especiales. Ore por los presidentes y reyes y por todos aquellos que est&aacute;n en autoridad sobre usted.</p>

<p>Ore especialmente por la salvaci&oacute;n de las almas, por las oportunidades diarias de presentar a otros a Cristo, por el ministerio del Esp&iacute;ritu Santo y por el cumplimiento de la Gran Comisi&oacute;n en nuestra generaci&oacute;n. Comience con su universidad o comunidad. Ore y busque uno o m&aacute;s amigos cristianos que puedan ser sus compa&ntilde;eros de oraci&oacute;n.</p>

<p>No subestime el poder de la oraci&oacute;n intercesora por la salvaci&oacute;n de las almas. Mis padres estuvieron casados por treinta y cinco a&ntilde;os antes de que mi propio padre recibiera a Cristo. El amor que se ten&iacute;an era fuerte, pero la indiferencia de mi padre al Se&ntilde;or debe haber sido un tremendo sufrimiento para mi madre y debe haberle costado muchas l&aacute;grimas. No obstante, ella persever&oacute; en la oraci&oacute;n por &eacute;l, por mis hermanos y hermanas y por m&iacute;, hasta que finalmente comenz&oacute; a ver los resultados, y toda nuestra familia ha recibido a Cristo.</p>

<p>Yo or&eacute; por varios a&ntilde;os para que mi novia, Vonette Zachary aceptara a Cristo. Cuando nos comprometimos, yo ya sab&iacute;a que ella era la elegida de Dios para m&iacute;. Ella hab&iacute;a sido muy activa en la iglesia desde su juventud, y yo di por hecho de que era cristiana. Sin embargo, conforme pas&oacute; el tiempo, me di cuenta de que Vonette era miembro de la iglesia pero probablemente no era cristiana. Las evidencias de que ella hubiera entregado su vida a Cristo eran muy pocas. Por lo tanto, yo oraba con ah&iacute;nco por su salvaci&oacute;n.&nbsp;</p>

<div class="block-quote">Ore especialmente por la salvaci&oacute;n de las almas, por las oportunidades diarias de presentar a otros a Cristo, por el ministerio del Esp&iacute;ritu Santo y por el cumplimiento de la Gran Comisi&oacute;n en nuestra generaci&oacute;n. Comience con su universidad o comunidad. Ore y busque uno o m&aacute;s amigos cristianos que puedan ser sus compa&ntilde;eros de oraci&oacute;n.</div>

<p>Como hab&iacute;a rendido mi vida al Se&ntilde;or antes de proponerle matrimonio a Vonette, estaba decidido a no casarme con una incr&eacute;dula. Las dudas fueron en aumento y comenc&eacute; a preguntarme si realmente era la voluntad de Dios para m&iacute; el casarme con esta joven hermosa y maravillosa, pero para quien Dios no era una realidad, aunque yo la amaba profundamente.</p>

<p>Luego, un d&iacute;a de verano, en un retiro cristiano al cual yo la invit&eacute;, Vonette rindi&oacute; su vida al Se&ntilde;or. Mis oraciones fueron contestadas; entonces fue cuando decidimos casarnos; y hemos pasado juntos m&aacute;s de cuatro d&eacute;cadas de bendiciones, en un matrimonio maravilloso cuyo centro es Cristo.</p>

<p>Por lo tanto, puedo identificarme con usted si es que est&aacute; orando por un hijo, hija, c&oacute;nyuge o amiga, y todav&iacute;a no ha visto los resultados. Le animo a confiar en el tiempo de Dios. Aunque yo quer&iacute;a que Vonette recibiera a Cristo pronto, Dios prefiri&oacute; esperar tres a&ntilde;os, un tiempo diferente y que lo glorific&oacute; grandemente. &Eacute;l es soberano y responder&aacute; a su oraci&oacute;n en Su estilo especial, en Su tiempo m&aacute;s apropiado.</p>

<p>Yo le animo a recibir esta palabra especial de seguridad de parte de Dios; &Eacute;l desea salvar el alma de sus seres queridos, amigos o vecinos aun m&aacute;s que usted.</p>

<div class="quote-left">Porque de tal manera am&oacute; Dios al mundo, que ha dado a su Hijo Unig&eacute;nito, para que todo aquel que en &eacute;l crea no se pierda, mas tenga vida eterna. El Se&ntilde;or no retarda su promesa, seg&uacute;n algunos lo tienen por tardanza, sino que es paciente para con nosotros, no queriendo que ninguno perezca, sino que todos procedan al arrepentimiento.</div>

<p>S&oacute;lo reclame la promesa de 1 Juan 5:14,15,</p>

<div class="quote-right">Y esta es la confianza que tenemos en &eacute;l, que si pedimos alguna cosa conforme a su voluntad, &eacute;l nos oye. Y si sabemos que &eacute;l nos oye en cualquiera cosa que pidamos, sabemos que tenemos las peticiones que le hayamos hecho.</div>

<p>En ese sentido, ore por sus seres queridos y amigos con la confianza que &Eacute;l lo oir&aacute; y responder&aacute; su oraci&oacute;n como &eacute;l lo prometi&oacute;.</p>

<p>El modelo de oraci&oacute;n integrado por adoraci&oacute;n, confesi&oacute;n, acci&oacute;n de gracias y s&uacute;plica, ha ayudado a muchos cristianos a desarrollar una vida de oraci&oacute;n de comunicaci&oacute;n m&aacute;s abierta con su Dios y Padre amoroso.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary11" class="summary"><h2>+ C&Oacute;MO ORAR CON CONFIANZA</h2></div>
<div class="collapsed" id ="Text11">
<!-- end default revealSummary -->

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc9-3.png" style="float:right; width:50%" />&iquest;C&oacute;mo puede esperar usted respuesta a sus oraciones? Se deben seguir cuatro imperativos: permanecer, pedir, creer y recibir. Deteng&aacute;monos por algunos momentos en cada uno de ellos.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary12" class="summary"><h3>+ Permanecer.</h3></div>
<div class="collapsed" id ="Text12">
<!-- end default revealSummary -->

<p>Jes&uacute;s dijo que permanecer es la clave de una oraci&oacute;n exitosa. &ldquo;Si permanec&eacute;is en m&iacute; y mis palabras permanecen en vosotros, pedid todo lo que quer&eacute;is, y os ser&aacute; hecho.&rdquo;</p>

<p>En otras palabras, si usted permanece en Cristo, si su vida est&aacute; totalmente rendida a &Eacute;l y a Su Palabra, &Eacute;l permanece en usted y, por lo tanto, usted conoce Su voluntad, puede pedir lo que quiera porque su voluntad es hacer Su voluntad. Permanecer, es sencillamente vivir una vida de fe y obediencia en la plenitud del Esp&iacute;ritu Santo. Una vida rendida al Se&ntilde;or&iacute;o de Cristo, sin pecados no confesados, y estando completamente a disposici&oacute;n de Dios.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary13" class="summary"><h3>+ Pedir.</h3></div>
<div class="collapsed" id ="Text13">
<!-- end default revealSummary -->

<p>Si espera respuestas a sus oraciones, debe pedir. El ap&oacute;stol Santiago dice: &ldquo;No ten&eacute;is lo que dese&aacute;is, porque no ped&iacute;s. Ped&iacute;s y no recib&iacute;s, porque ped&iacute;s mal, para gastar en vuestros deleites.&rdquo;</p>

<p>Jes&uacute;s dice, &ldquo;Si algo pidi&eacute;reis en mi nombre, yo lo har&eacute;. Hasta ahora nada hab&eacute;is pedido en mi nombre; pedid, y recibir&eacute;is, para que vuestro gozo sea cumplido.&rdquo;</p>

<p>En su Serm&oacute;n del Monte, Jes&uacute;s dijo, &ldquo;Pedid y se os dar&aacute;; buscad y hallar&eacute;is; llamad, y se os abrir&aacute;. Porque todo aquel que pide, recibe; y el que busca, halla; y al que llama se le abrir&aacute;.&rdquo;</p>

<p>Los problemas sin resolver que hay en el mundo son tantos, que casi no se pueden contar. Hay personas que todav&iacute;a est&aacute;n enfermas; las almas todav&iacute;a no han sido alcanzadas para Cristo; hay gente mala que todav&iacute;a ejerce poder financiero y pol&iacute;tico; y muchas injusticias contin&uacute;an, &iexcl;principalmente porque los hijos de Dios no piden!</p>

<p>Creer. Jes&uacute;s prometi&oacute; en Mateo 21:22, &ldquo;Y todo lo que pidi&eacute;reis en oraci&oacute;n, creyendo, lo recibir&eacute;is.&rdquo; Creer es la clave de la oraci&oacute;n contestada. Pero, &iquest;c&oacute;mo conseguir esa fe para creer? &iquest;Deber&iacute;a usted alcanzar alg&uacute;n tipo de estado mental que en cierta forma se parezca a la fe? Por supuesto que no.</p>

<p>Dios no requiere que usted tenga mucha fe. Sencillamente debe tener fe en un gran Dios. Jes&uacute;s dice:</p>

<div class="quote-left">Si tuvi&eacute;reis fe como un grano de mostaza, dir&eacute;is a este monte: P&aacute;sate de aqu&iacute; all&aacute;, y se pasar&aacute;; y nada os ser&aacute; imposible.</div>

<p>Santiago ense&ntilde;&oacute; a pedir &ldquo;con fe, no dudando nada&rdquo; porque la persona de doble &aacute;nimo no puede esperar la respuesta de Dios a sus oraciones.</p>

<p>Comprenda, lo importante es la calidad de la fe, no la cantidad. La fe viene de Dios.</p>

<p>No es tampoco algo que usted trata de adquirir por s&iacute; mismo. S&oacute;lo los que caminan en obediencia experimentan una vida de fe. Usted no puede estar en el trono de su vida y pretender orar con fe. Nunca encontrar&aacute; usted una persona con mucha fe en un gran Dios, y que se reh&uacute;se a obedecer a Dios, Aqu&eacute;l en quien se le ha ordenado confiar.</p>

<p><strong>El Esp&iacute;ritu Santo usa tres medios b&aacute;sicos para producir fe en la oraci&oacute;n de una persona.</strong></p>

<p><strong>Primero, usa la Palabra de Dios.</strong> Conforme usted estudie la Biblia aprender&aacute; m&aacute;s y m&aacute;s sobre el car&aacute;cter de Dios, de Su amor, de Su sabidur&iacute;a, de Su poder, de Sus obras y de Su soberan&iacute;a. Mientras m&aacute;s conozca a Dios, mayor ser&aacute; su confianza en &Eacute;l. La &ldquo;fe&rdquo;, escribe Pablo, &ldquo;es por el o&iacute;r, y el o&iacute;r, por la palabra de Dios.&rdquo;</p>

<p><strong>Segundo, El utiliza la comuni&oacute;n con otros cristianos y muchas circunstancias y experiencias. </strong>Por ejemplo, su fe en Dios crece a medida que usted observa a un amigo que sea usado por Dios para llevar a otros a Cristo. Al compartirle su experiencia, ese testimonio lo impulsa a creer que Dios puede usarlo a usted tambi&eacute;n.</p>

<p><strong>Tercero, El usa impresiones o convicciones fuertes.</strong> El ap&oacute;stol Pablo nos dice en Filipenses 2:13, &ldquo;Porque Dios es el que en vosotros produce as&iacute; el querer como el hacer, por su buena voluntad.&rdquo;</p>

<p>Por ejemplo, cinco estudiantes de secundaria comenzaron a sentir su responsabilidad ante Dios, a la luz de San Mateo 28:18-20. Cada uno de estos estudiantes se sinti&oacute; impulsado a hacer una lista de tres amigos, a los que quer&iacute;an reclamar para Cristo. La primera semana se reunieron diariamente a orar para que esos amigos sintieran la necesidad de Dios. La segunda semana oraron para ser instrumentos de Dios. La tercera semana oraron por oportunidades para hablarles a sus amigos de Cristo. En esa &uacute;ltima semana quince estudiantes recibieron al Salvador.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary14" class="summary"><h3>+ Recibir.</h3></div>
<div class="collapsed" id ="Text14">
<!-- end default revealSummary -->

<p>Por fe, apropie las respuestas a sus oraciones. Si usted sabe que permanece en Cristo, es controlado por el Esp&iacute;ritu Santo y est&aacute; orando de acuerdo con la Palabra y la voluntad de Dios, entonces puede estar seguro que Dios contestar&aacute; su oraci&oacute;n.</p>

<p>Por lo tanto, prep&aacute;rese para recibir la respuesta. Imagine que ya est&aacute; recibiendo la respuesta a su pedido, y comience a dar gracias a Dios por eso.</p>

<p>En 1954, Roger Bannister rompi&oacute; la marca de los cuatro minutos para correr una milla. Esta marca nunca hab&iacute;a sido rota a lo largo de la historia, pero Bannister crey&oacute; que pod&iacute;a hacerlo. &Eacute;l desarroll&oacute; una imagen mental de s&iacute; mismo rompiendo el r&eacute;cord de los cuatro minutos para la milla, y as&iacute; lo hizo. Desde 1954, cientos de otros atletas han superado la marca de cuatro minutos para la milla, sencillamente porque Roger Bannister comprob&oacute; que pod&iacute;a hacerlo.</p>

<p>Si una persona puede alcanzar el &eacute;xito tan s&oacute;lo utilizando recursos humanos, &iquest;cu&aacute;nto m&aacute;s podr&aacute; usted lograr, si deposita su fe en el Dios Omnipotente y si apropia Sus recursos sobrenaturales e inagotables?</p>

<div class="block-quote">Es sencillo. Todo lo que usted imagine v&iacute;vidamente, desee ardientemente, crea sinceramente y lleve a cabo poniendo todo su entusiasmo, inevitablemente tiene que hacerse realidad, asumiendo, por supuesto, que hay base b&iacute;blica para eso.</div>

<p>Es sencillo. Todo lo que usted imagine v&iacute;vidamente, desee ardientemente, crea sinceramente y lleve a cabo poniendo todo su entusiasmo, inevitablemente tiene que hacerse realidad, asumiendo, por supuesto, que hay base b&iacute;blica para eso.</p>

<p>Consideremos, por ejemplo, la Gran Comisi&oacute;n. Por muchos a&ntilde;os, desde el memorable instante en que Dios me dio la visi&oacute;n de fundar este ministerio y la visi&oacute;n por el mundo, he quedado fuertemente convencido de que el Esp&iacute;ritu Santo quiere ver cumplida la Gran Comisi&oacute;n en esta generaci&oacute;n. Como esa profunda impresi&oacute;n original que data desde 1951, he hecho de la Gran Comisi&oacute;n ha sido mi prioridad n&uacute;mero uno, como una expresi&oacute;n de mi amor por el Se&ntilde;or y por mi deseo de obedecerle.</p>

<p>Yo he tenido un cuadro mental v&iacute;vido de lo que requiere el cumplimiento de la Gran Comisi&oacute;n - saturar el mundo con el evangelio, discipular y capacitar l&iacute;deres clave usando medios tecnol&oacute;gicos,&nbsp;material impreso y audiovisual en sus diversas formas para comunicar el amor de Dios a nivel mundial.</p>

<p>Veo claramente, con los ojos de la mente, un d&iacute;a en el futuro inmediato, cuando millones de personas en la tierra conocer&aacute;n las grandes verdades sobre el amor de Dios y el perd&oacute;n en Jesucristo y coronar&aacute;n al Se&ntilde;or de se&ntilde;ores. Yo s&eacute; que el cumplimiento de la Gran Comisi&oacute;n es la voluntad de Dios, porque es su mandato y el deseo de su coraz&oacute;n. Por ello yo anhelo ardientemente que eso suceda.</p>

<p>Adem&aacute;s, creo sinceramente que la Gran Comisi&oacute;n se cumplir&aacute; porque es idea de Dios no del hombre. A m&iacute; me resultar&iacute;a incre&iacute;ble que nuestro Se&ntilde;or nos haya dado ese mandato sin proveernos los recursos necesarios para cumplirlo.</p>

<p>Finalmente, debido a que lo imagino tan v&iacute;vidamente, lo deseo ardientemente y creo con sinceridad en el cumplimiento de la Gran Comisi&oacute;n en mi generaci&oacute;n, puedo actuar con entusiasmo en pro de esa meta, d&aacute;ndome por completo a la tarea y ayudando a movilizar a millones de personas hacia su cumplimiento.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc9-3(1).png" style="float:left; width:50%" />Determine, sobre un fundamento b&iacute;blico claro, &iquest;qu&eacute; quiere Dios que usted imagine v&iacute;vidamente, desee ardientemente, crea sinceramente y act&uacute;e con gran entusiasmo para ayudar al cumplimiento de la Gran Comisi&oacute;n?. Empiece pensando en su propia vida, en su hogar, su comunidad, su estado, su naci&oacute;n y el mundo por el cual usted est&aacute; especialmente preocupado.</p>

<p>Destapando la fuente de poder.</p>

<p>Puede ser que, adem&aacute;s de su ministerio personal, Dios quiera que usted ore por el personal de las emisoras de radio o de televisi&oacute;n o el peri&oacute;dico, para que sean una influencia justa. Puede ser que El quiera que usted pida que un colegio, una universidad, una oficina, o una comunidad, o que toda persona dentro del radio de un kil&oacute;metro de su hogar, o que todo hogar de la ciudad entera, sea visitado personalmente por obreros capacitados que presenten a Cristo inteligentemente, en oraci&oacute;n y amor.</p>

<p>Recuerde que, conforme usted se inclina en oraci&oacute;n, est&aacute; poniendo en acci&oacute;n una fuente de poder que puede cambiar el curso de la historia. El poder incomparable de Dios, Su amor, Su sabidur&iacute;a y Su gracia est&aacute;n a su disposici&oacute;n, si tan s&oacute;lo le cree a &Eacute;l y se lo pide. Recuerde siempre que Jes&uacute;s prometi&oacute; que usted har&iacute;a los mismos milagros que &Eacute;l hizo, y a&uacute;n mayores.</p>

<p>&iquest;Se unir&aacute; a nosotros en una oraci&oacute;n para que el Se&ntilde;or de la cosecha env&iacute;e cuatro millones de disc&iacute;pulos a trabajar junto con miles de iglesias locales de todas las denominaciones, y con otros movimientos y organizaciones que deseen ver cumplida la Gran Comisi&oacute;n en esta generaci&oacute;n?</p>

<p>&iquest;Orar&aacute; tambi&eacute;n por un derramamiento poderoso del Esp&iacute;ritu Santo de Dios en el mundo entero, y por el dinero y los materiales necesarios para el cumplimiento de la tarea dada en la Gran Comisi&oacute;n?</p>

<div class="block-quote">La oraci&oacute;n es el mayor privilegio de la vida cristiana y la fuente de poder m&aacute;s revolucionaria que el hombre haya conocido. Si usted toma seriamente las promesas de Dios y las comienza a apropiar por fe, mediante la oraci&oacute;n, todo lo que &Eacute;l le ha prometido, comenzar&aacute;n los milagros en su camino, las multitudes ser&aacute;n conducidas a nuestro Se&ntilde;or Jesucristo. El mismo curso de la historia ser&iacute;a cambiado y usted estar&iacute;a ayudando a cumplir la Gran Comisi&oacute;n durante su vida en este mundo.</div>

</div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', '¿CÓMO  PUEDE USTED  ORAR CON  CONFIANZA?: ', '/content/M2/spa/tc/tc09.html')">
				<img class="social" src="@/assets/sites/mc2/images/standard/Share.png" />
			</td>
		</tr>
	</tbody>
</table>
<div class="footer">
<p class="footer">MC2</p>
<p class="footer" @click="share('website', 'https://GlobalChurchMovements.org', '')"> GlobalChurchMovements.org</p>
</div>

<!-- end mc2 sdcard languageFooter -->
<!-- end sdcard languageFooterSingle -->

</div><!--- Created by publishPage-->

</template>
<!-- begin sdcard Footer -->
<!-- end sdcard Footer -->