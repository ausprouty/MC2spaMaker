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
                        <div class="chapter_number ltr"><h1>1.</h1></div>
                        <div class="chapter_title ltr"><h1>¿CÓMO PUEDE  ESTAR SEGURO  DE CONOCER A  DIOS?</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
    <button id="MC2/spa/audio/tc/CT 1.mp3" type="button" class="external-audio">
        Escuchar &nbsp;"&iquest;C&Oacute;MO PUEDE ESTAR SEGURO DE CONOCER A DIOS?"&nbsp;</button>
        <div class="collapsed"></div>
    

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ HAY MILLONES QUE NO EST&Aacute;N SEGUROS</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->

<p>Un prominente hombre de negocios, l&iacute;der en su iglesia, vino a visitarme a mi oficina. Desde cualquier punto de vista &eacute;ste era un hombre destacado y de gran &eacute;xito. Al conversar se hizo muy evidente de que a pesar de su liderazgo activo en una iglesia, se sent&iacute;a inseguro de su destino eterno y estaba buscando desesperadamente tener seguridad de su salvaci&oacute;n espiritual.</p>

<p>La esposa de un l&iacute;der cristiano me dijo, &ldquo;Durante los &uacute;ltimos treinta a&ntilde;os, mi esposo y yo hemos conducido a Cristo a miles de personas, pero nunca he estado segura de mi propia salvaci&oacute;n. Ahora, estoy desesperada por tener esa seguridad. Necesito su ayuda.&rdquo;</p>

<p>Un estudiante que reci&eacute;n hab&iacute;a confiado en Jesucristo en su coraz&oacute;n, se puso de pie. Con una expresi&oacute;n confusa y preocupada dijo, &ldquo;No siento ninguna diferencia. Yo creo que Dios no oy&oacute; mi oraci&oacute;n. &iquest;C&oacute;mo puedo estar seguro de que Cristo ha entrado a mi vida?&rdquo;</p>

<p>Tal vez usted tambi&eacute;n est&eacute; inseguro sobre su relaci&oacute;n con el Se&ntilde;or. Por mi experiencia en aconsejar a miles de estudiantes y laicos a trav&eacute;s de los a&ntilde;os, estoy convencido de que millones de personas que asisten a las iglesias han invitado a Cristo en sus vidas, muchos de ellos una y otra vez, pero no est&aacute;n seguros de su salvaci&oacute;n.</p>

<p>En realidad, las encuestas indican que el 50% de los miembros de las iglesias en los Estados Unidos no est&aacute;n seguros de que Cristo est&aacute; en sus vidas. Son &eacute;stas unas buenas personas que a menudo han servido fielmente en sus iglesias durante a&ntilde;os. Sin embargo, ellas todav&iacute;a no est&aacute;n seguras de la presencia permanente de Cristo, no conf&iacute;an en que si murieran hoy ir&iacute;an con el Se&ntilde;or al cielo.</p>

<p>&iquest;Por qu&eacute; existe esa angustiosa incertidumbre aun entre personas de gran dedicaci&oacute;n religiosa? Estoy convencido que la falta de seguridad se debe a informaci&oacute;n incorrecta o a la falta de informaci&oacute;n acerca de qui&eacute;n es Dios. Esto incluye la comprensi&oacute;n de la deidad de Cristo, el significado de la crucifixi&oacute;n y la resurrecci&oacute;n de nuestro Se&ntilde;or y lo que significa recibirle como Salvador y Se&ntilde;or.</p>

<p>Perm&iacute;tame hacerle esta pregunta personal que es de mucha importancia: &iquest;y usted? Si muriera hoy, &iquest;est&aacute; absolutamente seguro, sin ninguna sombra de duda, de que ir&iacute;a al cielo?</p>

<p>En las p&aacute;ginas siguientes quiero presentarle un mensaje de gran esperanza. Es un mensaje que todo el mundo desea, y creo que hoy es muy necesario para la iglesia</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ GRAN HAMBRE POR CRISTO</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->

<p>He encontrado que existe hoy un hambre generalizada por conocer a Jesucristo en todo el mundo. Perm&iacute;tame darle s&oacute;lo algunos ejemplos.</p>

<p>Una amiga me pidi&oacute; que me entrevistara con su hermano. Ella estaba preocupada por &eacute;l debido a que no era cristiano. Este hombre era uno de los l&iacute;deres financieros y pol&iacute;ticos de nuestro pa&iacute;s.</p>

<p>Arreglamos una cita. Despu&eacute;s de que me present&eacute;, conversamos brevemente acerca de la condici&oacute;n del mundo y la necesidad de un avivamiento moral y espiritual, con lo cual &eacute;l estuvo de acuerdo. Le suger&iacute; que Dios lo hab&iacute;a ubicado en una posici&oacute;n &uacute;nica de liderazgo y que &eacute;l podr&iacute;a tener un impacto real para ayudar a cambiar el mundo para bien. Pero primero &eacute;l deber&iacute;a permitir que Dios lo cambiara.</p>

<p>Compart&iacute; con &eacute;l una copia de &ldquo;Las Cuatro Leyes Espirituales&rdquo; y le pregunt&eacute; si le gustar&iacute;a leerla conmigo.&nbsp;Cuando terminamos de leer el folleto, este hombre famoso y poderoso dijo humildemente que a &eacute;l le gustar&iacute;a recibir a Cristo. Oramos juntos.</p>

<p>Cuando terminamos de orar, &eacute;l me mir&oacute; y dijo, &ldquo;Quiero saber realmente qu&eacute; significa esto. Digame que se supone que debo hacer.&rdquo;</p>

<p>En Corea aproximadamente diez mil estudiantes, laicos y pastores que participaban en un seminario de capacitaci&oacute;n de la Cruzada Estudiantil y Profesional para Cristo, hablaron con m&aacute;s de cuarenta y dos mil personas durante el per&iacute;odo de capacitaci&oacute;n acerca de c&oacute;mo llegar a ser cristiano. M&aacute;s de 16 mil personas oraron con ellos y recibieron a Cristo. Adem&aacute;s 380 personas m&aacute;s expresaron su deseo de ser llenas del Esp&iacute;ritu Santo.</p>

<p>En Hait&iacute;, durante una semana similar de capacitaci&oacute;n, m&aacute;s de mil personas recibieron a Cristo en un d&iacute;a, cuando aproximadamente 500 pastores y l&iacute;deres laicos compartieron el evangelio a trav&eacute;s del uso del folleto de las Cuatro Leyes Espirituales.</p>

<p>Mi esposa Vonette y yo hemos visitado lo que era la Uni&oacute;n Sovi&eacute;tica muchas veces en los &uacute;ltimos a&ntilde;os. Lo que hemos presenciado y o&iacute;do es nada menos que milagroso. El hambre espiritual en esos pa&iacute;ses y su apertura al evangelio es mayor de lo que hubi&eacute;ramos podido imaginar. Los l&iacute;deres cristianos est&aacute;n sembrando el evangelio por todos lados, recibiendo una respuesta abrumadora.</p>

<p>Recientemente Vonette habl&oacute; en una reuni&oacute;n de mujeres, que fue la primera de esta clase y que se llev&oacute; a cabo para celebrar el D&iacute;a Internacional de la Mujer en la ex-Uni&oacute;n Sovi&eacute;tica. M&aacute;s de 300 mujeres se reunieron a escucharla, en una Iglesia Cristiana que hab&iacute;a sido fundada hace un siglo. Ella les ense&ntilde;&oacute; la Biblia durante una hora, y su conferencia fue seguida por dos horas y media de preguntas y respuestas que demostraron ampliamente el hambre espiritual reinante en ese lugar.</p>

<p>Hasta este momento noviembre 2020 se registra alrededor de 9 millones de reproducciones de la pel&iacute;cula Jes&uacute;s. Alrededor de 6 millones de personas han decidido seguir a Cristo como Se&ntilde;or y Salvador luego de mirar la pel&iacute;cula Jes&uacute;s. Se han plantado alrededor de 3 millones de iglesias a trav&eacute;s del proyecto Pel&iacute;cula Jes&uacute;s.</p>

<p>Los cristianos han encontrado tal apertura para el evangelio en Siberia que han exhibido la pel&iacute;cula &ldquo;JESUS&rdquo; en horario extraordinario aun durante el m&aacute;s crudo invierno. Estas son actividades cristianas que nunca se hab&iacute;an o&iacute;do en Occidente. Cada dos horas, la pel&iacute;cula &ldquo;JESUS&rdquo; est&aacute; siendo exhibida en un atestado sal&oacute;n, aun hasta la medianoche y de madrugada. Por m&aacute;s de 70 a&ntilde;os, el pueblo sovi&eacute;tico ha estado hambriento de Dios y soporta con mucha disposici&oacute;n las inclemencias del tiempo, aun en las heladas noches siberianas, para conocer sobre de nuestro maravilloso Salvador.</p>

<p>En Rumania, un hombre describe la apertura para el evangelio en su pa&iacute;s,</p>

<div class="quote-left">Nuestro pueblo tiene hambre espiritual, una gran hambre espiritual. Todos los que encontramos, j&oacute;venes o estudiantes, se ponen muy felices cuando les damos libros cristianos.</div>

<p>Un Pastor rumano reporta,</p>

<div class="quote-right">En cada reuni&oacute;n tenemos de cinco a seis mil personas, y nosotros s&oacute;lo tenemos mil quinientos asientos. La gran mayor&iacute;a permanece de pie tres horas el domingo por la ma&ntilde;ana, dos horas el domingo por la noche y dos horas el viernes por la noche. La calle y el corredor se llenan de las multitudes. Llueva o truene, ellos est&aacute;n all&iacute;. Me anima ir a la iglesia y ver las multitudes que de todas direcciones se acercan a este lugar. &iexcl;Yo solamente alabo a Dios!</div>

<p>Los misioneros que viven en Europa Occidental y distribuyen Biblias a los europeos del Este, viajan por todos estos pa&iacute;ses informando tambi&eacute;n de la gran hambre por la Palabra de Dios. Cuando reparten literatura cristiana en barcos, autobuses y trenes de Bulgaria, Polonia, Eslovaquia, la Rep&uacute;blica Checa, Rusia y Rumania, encuentran manos ansiosas tratando de alcanzar las Biblias para satisfacer sus profundas necesidades espirituales.</p>

<p>Incluso los marineros de embarcaciones procedentes de Cuba, Etiop&iacute;a y China quieren apagar su sed espiritual. Un misionero cuenta que cuando puede abordar barcos chinos, encuentra a muchos marineros dispuestos y ansiosos de aceptar Biblias gratis. En un barco, su malet&iacute;n lleno de Biblias y Nuevos Testamentos fue vaciado en cuesti&oacute;n de segundos.</p>

<p>Estos ejemplos nos muestran s&oacute;lo algunos de los millones de personas que tienen hambre de Dios en todo el mundo. Creo que millones de personas est&aacute;n inseguras de su relaci&oacute;n con Dios simplemente por falta de informaci&oacute;n. Nosotros debemos ayudarlos a comprender que el cristianismo no es s&oacute;lo una filosof&iacute;a de vida, ni un c&oacute;digo de &eacute;tica, ni s&oacute;lo normas para seguir. El cristianismo es una relaci&oacute;n personal con el Dios vivo, el Creador Todopoderoso, por medio de la fe en su &uacute;nico Hijo amado, nuestro Se&ntilde;or Jesucristo.</p>

<p>Si usted quita a Buda del budismo, a Mahoma del islamismo y as&iacute; a los fundadores de otras religiones, no se notar&aacute; gran diferencia. Pero si usted quita a Jesucristo del cristianismo, no quedar&aacute; m&aacute;s que la forma externa. El cristianismo es una relaci&oacute;n personal con el Cristo vivo.</p>

<p>&iquest;C&oacute;mo puede entonces estar seguro de su relaci&oacute;n con Cristo? Otra vez le hago esa pregunta fundamental, &laquo;Si usted muriera en este momento, &iquest;sabe d&oacute;nde pasar&iacute;a la eternidad?&raquo;</p>

<p>Tal vez usted ha recibido a Cristo hace poco tiempo y todav&iacute;a no est&aacute; seguro de que realmente haya pasado algo, usted no conf&iacute;a en su salvaci&oacute;n; le falta informaci&oacute;n sobre la seguridad de su relaci&oacute;n con Dios.</p>

<p>Quiero compartir con usted algunos principios vitales que le dar&aacute;n esa seguridad.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ UNA TRIPLE ENTREGA</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->

<p>Ser Cristiano implica recibir por fe a Jesucristo como Se&ntilde;or y su regalo de amor y perd&oacute;n de Dios.</p>

<p>Esto resulta en una triple entrega de dedicaci&oacute;n a una persona, la persona del Se&ntilde;or Jesucristo. Es una entrega de su intelecto, de sus emociones y de su voluntad a &Eacute;l.</p>

<p>Examinemos, uno por uno, cada elemento de esta entrega del cristiano.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h3>+ 1. Entrega Intelectual</h3></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->

<p>El cristianismo se funda en bases b&iacute;blicas s&oacute;lidas y en hechos hist&oacute;ricos. Para estar seguro de que usted es cristiano, debe comprender que el cristianismo no es un salto de fe a ciegas, a las tinieblas de lo desconocido. Las verdades de la fe cristiana est&aacute;n bien documentadas por siglos de hechos hist&oacute;ricos, estudios e investigaci&oacute;n. Muchos eruditos han dedicado sus vidas a investigar el nacimiento, la vida, la ense&ntilde;anza, los milagros, la muerte, la resurrecci&oacute;n y la influencia de Jes&uacute;s de Nazaret. Como resultado, contamos con abrumadoras evidencias hist&oacute;ricas que comprueban todo lo anterior.</p>

<p>La e<img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc1-1.png" style="float:right; width:50%" />videncia incluye escritos de los contempor&aacute;neos de Jes&uacute;s cuyas vidas fueron transformadas para siempre como resultado de su comuni&oacute;n &iacute;ntima con &Eacute;l. Los enemigos de Cristo verificaron tambi&eacute;n Su resurrecci&oacute;n al conspirar y pagar testigos para fabricar una historia que explicara el motivo por qu&eacute; la tumba de Jes&uacute;s estaba vac&iacute;a.</p>

<p>Por medio de &eacute;stas y otras pruebas m&aacute;s convincentes, nosotros sabemos con certeza que Jes&uacute;s vivi&oacute; en la tierra, muri&oacute; y resucit&oacute;.</p>

<p>En los &uacute;ltimos a&ntilde;os de su vida, el dramaturgo alem&aacute;n Johann Wolfgang Von Goethe escribi&oacute;:</p>

<div class="quote-left">Si alguna vez el Divino se apareci&oacute; en la tierra, fue en la persona de Cristo.</div>

<p>El novelista y fil&oacute;sofo ruso Fedor Dostoievsky dijo:</p>

<div class="quote-right">Aun aquellos que han renunciado al cristianismo y lo atacan, en lo profundo de su ser todav&iacute;a siguen el ideal cristiano, porque hasta ahora ni la astucia ni el ardor de sus corazones ha podido crear un ideal de hombre m&aacute;s elevado y virtuoso, que el ideal dado por Cristo. Cuando esto se ha intentado, el resultado ha sido grotesco.</div>

<p>El Dr. Charles Malik de L&iacute;bano, expresidente de la Asamblea General de las Naciones Unidas dijo,</p>

<div class="quote-left">Yo realmente no se que quedar&iacute;a de la religi&oacute;n y de la historia, si la influencia de Cristo, directa e indirecta, fuera erradicada de la literatura, del arte, de la vida diaria, de las normas morales y de la creatividad en las diferentes actividades de la mente y del esp&iacute;ritu.&rdquo; Napole&oacute;n Bonaparte, el famoso general franc&eacute;s, dijo durante su exilio, &ldquo;Yo conozco al hombre, y le digo a usted que Jesucristo no es meramente un hombre. Entre &eacute;l y cualquier otra persona en el mundo, no hay comparaci&oacute;n posible.</div>

<p>Alejandro, C&eacute;sar, Carlomagno y yo hemos fundado imperios. Pero, &iquest;en qu&eacute; basamos las creaciones de nuestro propio ingenio? En la fuerza. Jesucristo fund&oacute; su imperio sobre el amor; y en este momento millones de hombres morir&iacute;an por &eacute;l.&rdquo;</p>

<p>Thomas Jefferson, tercer presidente de los Estados Unidos de Am&eacute;rica y autor principal de la Declaraci&oacute;n de la Independencia, dijo, &ldquo;De todos los sistemas de moralidad que he observado, antiguos y modernos, ninguno me parece tan puro como &eacute;ste de Jes&uacute;s.&rdquo;</p>

<p>M&aacute;s importante que lo que otros dicen acerca de Jes&uacute;s, es lo que la Biblia dice acerca de &Eacute;l. Jesucristo era Dios en carne y hueso. &Eacute;l vino a la tierra para morir en nuestro lugar. &Eacute;l estuvo dispuesto a llevar sobre s&iacute;, la muerte que cada uno de nosotros merec&iacute;a. Por medio de Su muerte y resurrecci&oacute;n, Jes&uacute;s nos permite recibir vida eterna y acceso libre al Dios Todopoderoso.</p>

<p>Hace varios a&ntilde;os, despu&eacute;s de haber dado una conferencia en una de las universidades m&aacute;s importantes del pa&iacute;s, un joven estudiante se acerc&oacute; para hablarme. Era el l&iacute;der del movimiento comunista en la universidad. Me acus&oacute; de tratar de &ldquo;lavarle el cerebro&rdquo; a los estudiantes por ser yo m&aacute;s maduro que ellos. Adem&aacute;s ten&iacute;a resentimiento contra m&iacute; por hablar de mi punto de vista cristiano, una filosof&iacute;a que, como es natural, se opon&iacute;a diametralmente a sus creencias marxistas.</p>

<p>En lugar de discutir con &eacute;l, lo invit&eacute; a mi casa a cenar. Mientras com&iacute;amos, entablamos una amena conversaci&oacute;n sobre diversos temas. Despu&eacute;s de comer el postre, tom&eacute; mi Biblia. &ldquo;Me gustar&iacute;a leerle algo de la Biblia,&rdquo; le dije.</p>

<p>El reaccion&oacute; duramente. &ldquo;&iexcl;No creo en la Biblia!&rdquo; declar&oacute;. &ldquo;No quiero o&iacute;r nada de lo que usted lea. He le&iacute;do la Biblia de tapa a tapa y est&aacute; llena de contradicciones y mitos. No creo una palabra de eso.&rdquo;</p>

<p>Le respond&iacute; diciendo, &ldquo;Si a usted no le importa, leer&eacute; algunas porciones de todos modos.&rdquo; Entonces abr&iacute; mi Biblia en el primer cap&iacute;tulo del Evangelio de Juan y le&iacute;:</p>

<div class="quote-left">
<p>En el principio era el Verbo, y el Verbo era con Dios, y el Verbo era Dios. Este era en el principio con Dios. Todas las cosas por &Eacute;l fueron hechas, y sin &Eacute;l nada de lo que ha sido hecho, fue hecho. En &Eacute;l estaba la vida, y la vida era la luz de los hombres. La luz en las tinieblas resplandece, y las tinieblas no prevalecieron contra ella.</p>

<p>Hubo un hombre enviado de Dios, el cual se llamaba Juan. Este vino por testimonio, para que diese testimonio de la luz, a fin de que todos creyesen por &eacute;l...</p>
</div>

<p>D&eacute;jeme leer eso&rdquo;, dijo ansiosamente. &ldquo;No recuerdo haberlo le&iacute;do antes.&rdquo; Ley&oacute; otra vez el pasaje cuidadosamente y me devolvi&oacute; la Biblia sin comentarios. Nuevamente abr&iacute; la Biblia, esta vez en Colosenses cap&iacute;tulo 1, comenzando con el vers&iacute;culo 13, y le&iacute;:</p>

<address>&nbsp;</address>

<div class="quote-right">
<p>El cual nos ha librado de la potestad de las tinieblas y trasladado al reino de su amado Hijo, en quien tenemos redenci&oacute;n por su sangre, el perd&oacute;n de pecados.&nbsp;</p>

<p>&Eacute;l es la imagen del Dios invisible, el primog&eacute;nito de toda creaci&oacute;n. Porque en &Eacute;l fueron creadas todas las cosas, las que hay en los cielos y las que hay en la tierra, visibles e invisibles; sean tronos, sean dominios, sean principados, sean potestades; todo fue creado por medio de &Eacute;l y para &Eacute;l.</p>

<p>Y &Eacute;l es antes de todas las cosas, y todas las cosas en &Eacute;l subsisten; y &Eacute;l es la cabeza del cuerpo que es la iglesia, &Eacute;l que es el principio, el primog&eacute;nito de entre los muertos, para que en todo tenga la preeminencia; por cuanto agrad&oacute; al Padre que en &Eacute;l habitase toda plenitud, y por medio de &Eacute;l reconciliar consigo todas las cosas, as&iacute; las que est&aacute;n en la tierra como las que est&aacute;n en los cielos, haciendo la paz mediante la sangre de su cruz.</p>

<p>Col. 1:13-20</p>
</div>

<p>De nuevo me pregunt&oacute; si pod&iacute;a leer el pasaje por s&iacute; mismo. Despu&eacute;s volv&iacute; a abrir mi Biblia y le&iacute; en Hebreos 1:1-3.</p>

<div class="quote-left">Dios, habiendo hablado muchas veces y de muchas maneras en otro tiempo a los padres por los profetas, en estos postreros tiempos nos ha hablado por el Hijo, a quien constituy&oacute; heredero de todo, y por quien asimismo hizo el universo; el cual, siendo el resplandor de Su gloria, y la imagen misma de Su sustancia, y quien sustenta todas las cosas con la palabra de Su poder, habiendo efectuado la purificaci&oacute;n de nuestros pecados por medio de s&iacute; mismo, se sent&oacute; a la diestra de la Majestad en las alturas.</div>

<address>&nbsp;</address>

<p>Para entonces, el joven estaba muy serio. A este punto su actitud beligerante y antagonista hab&iacute;a cambiado. En seguida le&iacute; 1 Juan 2:22, 23.</p>

<div class="quote-right">&iquest;Qui&eacute;n es el mentiroso, sino el que niega que Jes&uacute;s es el Cristo? Este es anticristo, el que niega al Padre y al Hijo. Todo aquel que niega al Hijo, tampoco tiene al Padre. El que confiesa al Hijo, tiene tambi&eacute;n al Padre.&nbsp;</div>

<address>&nbsp;</address>

<p>Cuando termin&eacute; de leer, &eacute;l estaba visiblemente conmovido. Conversamos unos instantes m&aacute;s. Despu&eacute;s de un momento se levant&oacute; y se prepar&oacute; para marcharse. Le pregunt&eacute; si le gustar&iacute;a escribir su nombre en nuestro libro de visitas. El asinti&oacute;.</p>

<p>Despu&eacute;s de anotar su nombre y su direcci&oacute;n, escribi&oacute; estas significativas palabras, &ldquo;la noche de la decisi&oacute;n.&rdquo;</p>

<p>He aqu&iacute; un joven que hab&iacute;a venido con fuego en los ojos, lleno de resentimiento y enojo hacia los cristianos. Sin embargo, por medio de la sencilla lectura de la santa e inspirada Palabra de Dios, el Esp&iacute;ritu Santo movi&oacute; a este joven al punto de estar intelectualmente dispuesto no s&oacute;lo a aceptar lo que hab&iacute;a o&iacute;do, sino a creerlo y recibirlo.</p>

<p>Despu&eacute;s de una de mis conferencias acerca de la singularidad de Jes&uacute;s, un destacado erudito originario de la India y celoso practicante del hinduismo, quien ostentaba un doble doctorado (uno en f&iacute;sica y otro en qu&iacute;mica) se acerc&oacute; a m&iacute; enojado e impaciente.</p>

<p>&ldquo;Estoy muy enojado con ustedes los cristianos,&rdquo; dijo. &ldquo;Me ofende la arrogancia con la que ustedes dicen tener el &uacute;nico camino para llegar a Dios. Yo pienso que el hinduismo es otro, el budismo, el sinto&iacute;smo y otras religiones son todos caminos para llegar a Dios.&rdquo;</p>

<div class="block-quote">Para ser cristiano usted debe considerar las aseveraciones de Cristo y creer intelectualmente que Jes&uacute;s es Dios y muri&oacute; por sus pecados, fue sepultado y se levant&oacute; de entre los muertos. Usted debe creer que &Eacute;l quiere venir a su vida para ser su Salvador y Se&ntilde;or.</div>

<p>Conforme hablamos y examinamos la Biblia juntos, comenz&oacute; a ver que el cristianismo es totalmente diferente de otras religiones y filosof&iacute;as. S&oacute;lo el cristianismo hace provisi&oacute;n para la necesidad b&aacute;sica del hombre - el perd&oacute;n de los pecados. El admiti&oacute; que la lectura diligente de los sagrados escritos hind&uacute;es y el observar cuidadosamente las ceremonias y ritos nunca lo hab&iacute;an capacitado para encontrar a Dios en manera personal. Finalmente, nos arrodillamos juntos, y este joven intelectual hind&uacute; le pidi&oacute; a Jes&uacute;s que le perdonara sus pecados y que fuera su Salvador.</p>

<p>Para ser cristiano usted debe considerar las aseveraciones de Cristo y creer intelectualmente que Jes&uacute;s es Dios y muri&oacute; por sus pecados, fue sepultado y se levant&oacute; de entre los muertos. Usted debe creer que &Eacute;l quiere venir a su vida para ser su Salvador y Se&ntilde;or.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h3>+ 2. Una entrega emocional</h3></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->

<p>El ser cristiano incluye tambi&eacute;n la participaci&oacute;n de sus emociones.</p>

<p>Por la Biblia sabemos que Dios mismo tiene emociones. El siente amor, gozo, tristeza, compasi&oacute;n, enojo, desilusi&oacute;n y muchas otras emociones m&aacute;s. La Biblia tambi&eacute;n dice que usted fue creado a la imagen de Dios. Como parte de su imagen, Dios nos ha dado la capacidad de experimentar emociones. Todo lo que usted hace, desde que se levanta por la ma&ntilde;ana hasta que se va a dormir por la noche, tiene que ver con sus emociones.</p>

<p>Cada persona que cree en Jesucristo como su Se&ntilde;or y Salvador tendr&aacute; una experiencia emocional distinta a la de otros. Pablo se encontr&oacute; con Dios en un episodio dram&aacute;tico en el camino a Damasco. Timoteo, por otro lado, fue formado en un hogar cristiano donde lleg&oacute; a conocer a Cristo a una edad temprana y creci&oacute; poco a poco en su fe.</p>

<p>Con frecuencia escuchamos a personas que al convertirse en cristianos comparten entusiastamente c&oacute;mo sus encuentros dram&aacute;ticos con Cristo los ha librado de la adicci&oacute;n a la droga, de burda inmoralidad o alg&uacute;n otro grave problema. El hecho de que sus vidas fueran radicalmente cambiadas, respalda sus palabras.</p>

<p>Por otro lado, hay muchos que se han arrodillado silenciosamente en la privacidad de sus hogares, como sucedi&oacute; en mi caso, o en un retiro en la monta&ntilde;a, o en el santuario de una iglesia y all&aacute; recibieron a Cristo en sus vidas sin ninguna experiencia emocional dram&aacute;tica.</p>

<div class="block-quote">Cada persona que cree en Jesucristo como su Se&ntilde;or y Salvador tendr&aacute; una experiencia emocional distinta a la de otros.</div>

<p>Las emociones pueden ser enga&ntilde;osas. Probablemente ning&uacute;n otro aspecto ha causado m&aacute;s inseguridad en las personas en su relaci&oacute;n con Dios, como lo ha sido el &eacute;nfasis equivocado en las emociones. Yo mismo he tenido momentos de gran regocijo, de entusiasmo y de gran percepci&oacute;n espiritual. Por otro lado, tambi&eacute;n he tenido momentos de tristeza y desilusi&oacute;n. Pero no dependo de esos sentimientos para determinar mi uni&oacute;n con Dios. Mis emociones pueden ser bastante enga&ntilde;osas.</p>

<p>Nosotros debemos vivir la vida cristiana por fe, no por emociones. Efectivamente, las emociones tienen un lugar en su experiencia personal, pero sus sentimientos y emociones no determinan la verdad de su relaci&oacute;n con Cristo. En vez de eso, los estados emocionales deben ser el resultado de su fe y obediencia. Jesucristo dijo, &ldquo;El que tiene mis mandamientos y los guarda, &eacute;se es el que me ama; y el que me ama, ser&aacute; amado por mi Padre, y Yo le amar&eacute;, y me manifestar&eacute; a &eacute;l.&rdquo;</p>

<p>(23.17) El libro de Romanos nos asegura, &ldquo;Porque en el evangelio la justicia de Dios se revela por fe y para fe, como est&aacute; escrito: Mas el justo por la fe vivir&aacute;.&rdquo;</p>

<p>En la experiencia cristiana hay un lugar para las emociones, sin embargo, usted no deber&iacute;a buscarlas ni intentar s&oacute;lo repetir las experiencias emocionales del pasado. Por otro lado, no es bueno ignorar el valor leg&iacute;timo de las emociones, pero siempre es m&aacute;s importante reconocer que usted est&aacute; llamado a vivir por fe - fe en Dios y fe en Sus promesas - y no pasarse buscando experiencias emocionales.</p>

<p>Un conocido m&iacute;o, trajo a su amigo a verme, con la esperanza de que pudiera recibir a Cristo, lo cual efectivamente ocurri&oacute;. En el curso de nuestra conversaci&oacute;n, se hizo evidente que mi propio amigo no era cristiano, a pesar de su preocupaci&oacute;n por la situaci&oacute;n espiritual de otros. Yo me atrev&iacute; a preguntarle, &ldquo;&iquest;Desde cu&aacute;ndo es usted cristiano?&rdquo;</p>

<p>&ldquo;&iquest;En realidad, no estoy seguro de ser realmente cristiano.&raquo; Replic&oacute;. &ldquo;&iquest;Cree usted que Jesucristo es el Hijo de Dios?&rdquo;</p>

<div class="block-quote">Nosotros debemos vivir la vida cristiana por fe, no por emociones.</div>

<address>&nbsp;</address>

<p>&ldquo;S&iacute;.&rdquo;</p>

<p>&ldquo;&iquest;Cree usted que El muri&oacute; en la cruz por sus pecados?&rdquo;</p>

<p>&ldquo;S&iacute;.&rdquo;</p>

<p>&ldquo;&iquest;Cree usted que si recibe a Jesucristo como su salvador, &Eacute;l entrar&aacute; en su vida y le har&aacute; un Hijo de Dios?&rdquo;</p>

<p>&ldquo;S&iacute;.&rdquo;</p>

<p>&ldquo;&iquest;Le gustar&iacute;a recibirlo ahora?&rdquo;</p>

<p>&ldquo;S&iacute;, me gustar&iacute;a, pero estoy buscando tener una experiencia emotiva. Cuando mi madre recibi&oacute; a Cristo, tuvo una experiencia emocional dram&aacute;tica; por eso yo he estado esperando todos estos a&ntilde;os que Dios me d&eacute; una experiencia as&iacute;.&rdquo;</p>

<p>Aunque &eacute;l era un cristiano profesante y activo en su iglesia, lo que le manten&iacute;a en incertidumbre sobre su salvaci&oacute;n, era este &eacute;nfasis equivocado en las emociones.</p>

<p>Pude explicarle que &eacute;l no ten&iacute;a que estar esperando una experiencia emocional, sino que pod&iacute;a creer en la Palabra de Dios. Finalmente nos arrodillamos para orar juntos y como una sencilla expresi&oacute;n de fe, recibi&oacute; a Jesucristo como su Salvador y Se&ntilde;or con el gozo adicional de saber que Cristo estaba en su vida.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h3>+ 3. Una entrega de la voluntad</h3></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->

<p>El ser cristiano no implica solamente su intelecto y sus emociones, sino tambi&eacute;n incluye la voluntad. Usted primero debe estar dispuesto a obedecer a Dios y a Su Palabra. Cristo enfatiz&oacute; la importancia de la voluntad del hombre en relaci&oacute;n a la seguridad de salvaci&oacute;n. Jes&uacute;s dijo:</p>

<div class="quote-left">El que quiera hacer la voluntad de Dios, conocer&aacute; si la doctrina es de Dios, o si yo hablo por mi propia cuenta. El que habla por su propia cuenta, su propia gloria busca; pero el que busca la gloria del que le envi&oacute;, &eacute;ste es verdadero, y no hay en&nbsp;&eacute;l injusticia.</div>

<address>&nbsp;</address>

<p>Algunas personas son reacias a obedecer a Cristo porque tienen miedo de que &Eacute;l cambiar&aacute; sus planes y les quitar&aacute; todo el gusto por la vida.</p>

<p>Un estudiante a quien aconsej&eacute; y por quien hab&iacute;a orado mucho, dudaba si deb&iacute;a recibir a Cristo, porque estaba entregado a una vida de fiestas y lujuria sexual. Por medio de las oraciones de compa&ntilde;eros y amigos, este joven decidi&oacute; obedecer a Cristo. Descubri&oacute; que lo que cre&iacute;a que era una vida emocionante, no era nada comparada con&nbsp;la vida abundante que el Se&ntilde;or Jes&uacute;s nos da. Se convirti&oacute; en uno de los cristianos m&aacute;s activos y fruct&iacute;feros de la universidad.</p>

<p>Este estudiante hab&iacute;a luchado contra la voluntad de Dios en su vida hasta que se di&oacute; cuenta de la realidad de las palabras de Jesucristo:</p>

<div class="quote-left">
<p>Y llamando a la gente y a sus disc&iacute;pulos, les dijo: Si alguno quiere venir en pos de m&iacute;, ni&eacute;guese a s&iacute; mismo, y tome su cruz y s&iacute;game. Porque todo el que quiera salvar su vida, la perder&aacute;; y todo el que pierda su vida por causa de m&iacute; y del evangelio la salvar&aacute;. Porque &iquest;qu&eacute; aprovechar&aacute; al hombre si ganare todo el mundo, y perdiere su alma? &iquest;O qu&eacute; recompensa dar&aacute; el hombre por su alma? Porque el que se avergonzare de m&iacute; y de mis palabras en esta generaci&oacute;n ad&uacute;ltera y pecadora, el Hijo del hombre se avergonzar&aacute; tambi&eacute;n de &eacute;l, cuando venga en la gloria de su Padre con los santos &aacute;ngeles.</p>

<p>De cierto os digo que no hay ninguno que haya dejado casa, o hermanos, o hermanas, o padre, o madre, o mujer, o hijos, o tierras, por causa de mi y del evangelio, que no reciba cien veces m&aacute;s ahora en este tiempo; casas, hermanos, hermanas, madres, hijos y tierras con persecuciones; y en el siglo venidero la vida eterna.</p>
</div>

<p>Un entrenador de atletismo que era muy estimado por millones de personas, un hombre de car&aacute;cter &iacute;ntegro y de grandes habilidades, comparti&oacute; conmigo su renuencia a rendir su vida totalmente a Cristo. Tem&iacute;a que Dios le pidiera convertirse en misionero y tener que abandonar lo que m&aacute;s le gustaba y le produc&iacute;a la mayor satisfacci&oacute;n de su vida - la ense&ntilde;anza.</p>

<p>Muchas personas que han logrado el &eacute;xito han rechazado seguir a Cristo porque tienen miedo que les exija vender sus posesiones y tener que dar todo a los pobres, tal como Jes&uacute;s le dijo al joven rico que hiciera.</p>

<p>Debemos saber que aunque algunas veces Dios bien puede guiar a ciertas personas a regalar sus posesiones, &Eacute;l tambi&eacute;n gu&iacute;a a otros a usar su posici&oacute;n e influencia para Cristo de otra manera.</p>

<p>Conforme usted camine en fe y obediencia a Dios, como un acto de su voluntad y le permita que &Eacute;l cambie su vida, aumentar&aacute; la seguridad de su relaci&oacute;n con &Eacute;l. Usted vendr&aacute; a experimentar la obra de Dios en su vida, mientras &Eacute;l lo capacita para hacer lo que usted nunca habr&iacute;a hecho por s&iacute; mismo.</p>

<p>Podr&aacute; experimentar cosas tales como el amar a aqu&eacute;llos que lo tratan mal y mantendr&aacute; un esp&iacute;ritu de paz aunque est&eacute; rodeado de presiones y problemas. Va a desarrollar un deseo cada vez mayor por alcanzar a otros con el amor de Jesucristo.</p>

<div class="block-quote">Todas las personas a quienes he aconsejado y que han rechazado a Cristo, siempre lo han hecho como un asunto del coraz&oacute;n no de la cabeza - un asunto de la voluntad, no del intelecto. Ellos han usado temas intelectuales como una &ldquo;cortina de humo&rdquo; para ocultar los problemas profundos del coraz&oacute;n.</div>

<p>Pero, si usted no conf&iacute;a en Dios y en el plan que &Eacute;l tiene para usted, ni obedece sus mandamientos, inevitablemente caer&aacute; en dudas acerca de su salvaci&oacute;n.</p>

<p>Algunas personas no desean recibir a Cristo debido a su orgullo y egocentrismo. Por cincuenta a&ntilde;os aproximadamente, he trabajado con los as&iacute; llamados &ldquo;intelectuales.&rdquo;</p>

<p>Durante esos a&ntilde;os, nunca he conocido a una persona que diga, &ldquo;He considerado toda la evidencia hist&oacute;rica y las palabras de Jesucristo, y no puedo creer que sea el &ldquo;Hijo de Dios.&rdquo;</p>

<p>Todas las personas a quienes he aconsejado y que han rechazado a Cristo, siempre lo han hecho como un asunto del coraz&oacute;n no de la cabeza - un asunto de la voluntad, no del intelecto. Ellos han usado temas intelectuales como una &ldquo;cortina de humo&rdquo; para ocultar los problemas profundos del coraz&oacute;n.</p>

<p>Hace muchos a&ntilde;os conoc&iacute; a un famoso profesor de un prestigioso seminario. No cre&iacute;a que Jes&uacute;s era Dios, a pesar de haber ense&ntilde;ado a miles de j&oacute;venes quienes llegaron a ser ministros. Un d&iacute;a, un amigo m&iacute;o que estaba&nbsp;obteniendo su doctorado bajo la supervisi&oacute;n de este profesor, me invit&oacute; a conocerlo.</p>

<p>Mi amigo me advirti&oacute;: &ldquo;El profesor no cree que la Biblia sea la Palabra de Dios, pero es un buen hombre. A m&iacute; me cae bien pues es muy amable y cordial. Yo creo que usted podr&aacute; entenderse bien con &eacute;l.&rdquo;</p>

<p>Las primeras palabras del profesor hacia m&iacute; despu&eacute;s de que fui presentado fueron, &ldquo;Dr. Bright, cuando usted les habla a los estudiantes acerca de llegar a ser cristianos, &iquest;qu&eacute; les dice?&raquo;</p>

<p>Conociendo su reputaci&oacute;n, yo quer&iacute;a sopesar sus palabras cuidadosamente, pero antes de que pudiera replicar, &eacute;l me formul&oacute; una segunda pregunta. &ldquo;Mejor a&uacute;n, &iquest;qu&eacute; me dir&iacute;a a m&iacute;? Me gustar&iacute;a llegar a ser cristiano.&rdquo;</p>

<p>Se puso a explicarme que recientemente hab&iacute;a estado leyendo la Palabra de Dios con un nuevo entendimiento. Por un par de a&ntilde;os hab&iacute;a estado estudiando los escritos de los padres de la iglesia y las biograf&iacute;as de los grandes h&eacute;roes de la fe. Como resultado, se hab&iacute;a convencido intelectualmente de que Jes&uacute;s es el Hijo de Dios, pero no le conoc&iacute;a como su Salvador personal.</p>

<p>Le dibuj&eacute; un c&iacute;rculo en un pedazo de papel explicando, &ldquo;Digamos que este c&iacute;rculo representa su vida.&rdquo; En el c&iacute;rculo dibuj&eacute; un trono y en el trono escrib&iacute; la letra &ldquo;Y&rdquo; por &ldquo;YO.&rdquo; Luego le expliqu&eacute;: &ldquo;Para ser cristiano usted debe recibir a Cristo en su vida como Salvador del pecado y como su Se&ntilde;or y Maestro. Debe rendirle el control de su vida a &Eacute;l.&rdquo;</p>

<p>&ldquo;Ese es mi problema,&rdquo; dijo. &ldquo;El orgullo intelectual me ha impedido hacer esto. He recibido muchos honores en el mundo acad&eacute;mico, y no he estado dispuesto a humillarme ante Dios. Por a&ntilde;os he negado la deidad de Cristo y he ense&ntilde;ado a miles de estudiantes a hacer lo mismo.&rdquo;</p>

<p>En ese momento fuimos interrumpidos por una llamada telef&oacute;nica, y debido a otras citas ya establecidas, no pudimos finalizar nuestra conversaci&oacute;n. &Eacute;l nos pidi&oacute; que regresaramos dos d&iacute;as despu&eacute;s. Cuando regresamos, nos llev&oacute; a una oficina sin tel&eacute;fonos y cerr&oacute; la puerta con llave detr&aacute;s nuestro y dijo:</p>

<p>&ldquo;Quiero que sepan que fui esta ma&ntilde;ana a una de las iglesias locales, tom&eacute; la comuni&oacute;n y prepar&eacute; mi coraz&oacute;n para vuestra visita. He estado meditando en el tercer cap&iacute;tulo del Evangelio de San Juan, y quiero que oren por m&iacute; para que pueda conocer a Jesucristo como mi Salvador personal.&rdquo;</p>

<p>Yo hice una oraci&oacute;n primero, luego &eacute;l y finalmente mi amigo. Ese d&iacute;a este hombre de renombre internacional, como un ni&ntilde;o peque&ntilde;o, recibi&oacute; a Cristo por fe como un acto de su voluntad. Toda su vida fue cambiada. Sus ense&ntilde;anzas cambiaron, su filosof&iacute;a de vida cambi&oacute;, y lleg&oacute; a ser una nueva criatura en Cristo. B&aacute;sicamente su problema no era intelectual; era un problema de orgullo y egocentrismo.</p>

<p>Otra raz&oacute;n por qu&eacute; las personas son reacias a comprometer sus vidas a Cristo es porque Satan&aacute;s los ha enga&ntilde;ado. Jes&uacute;s habl&oacute; acerca del car&aacute;cter de Satan&aacute;s de esta manera:</p>

<div class="quote-left">Vosotros sois de vuestro padre el diablo, y los deseos de vuestro padre quer&eacute;is hacer. El ha sido homicida desde el principio, y no ha permanecido en la verdad, porque no hay verdad en &eacute;l. Cuando habla mentira, de suyo habla, porque es mentiroso y padre de mentira.</div>

<p>Hace algunos a&ntilde;os fui invitado a encontrarme con un militar bastante conocido. El era una persona muy cordial y agradable. Conforme hablamos, me dijo que quer&iacute;a ser cristiano, pero por alg&uacute;n motivo no pod&iacute;a tomar esa decisi&oacute;n.</p>

<p>Nosotros conversamos por m&aacute;s de una hora y finalmente sent&iacute; que deb&iacute;a compartir con &eacute;l un pasaje de Colosenses 1:13,14. Le ped&iacute; que lo leyera en voz alta.</p>

<div class="quote-right">Dios nos ha librado de la potestad de las tinieblas y trasladado al reino de su amado Hijo, en quien tenemos redenci&oacute;n por su sangre, el perd&oacute;n de pecados.</div>

<p>Luego le expliqu&eacute;, &ldquo;Hay solamente dos reinos en el mundo - el reino de Dios y el reino de Satan&aacute;s. &iquest;En cu&aacute;l est&aacute; usted?&rdquo; Despu&eacute;s de algunos momentos pensando en silencio, dijo, &ldquo;Creo que en el reino de Satan&aacute;s.&rdquo;</p>

<p>Y luego le pregunt&eacute;, &ldquo;&iquest;Qu&eacute; le gustar&iacute;a hacer al respecto?&rdquo; &Eacute;l contest&oacute;, &ldquo;Me gustar&iacute;a pasarme al reino de Dios.&rdquo;</p>

<p>Entonces, este gran general, cuya influencia se hab&iacute;a sentido en el mundo, confi&oacute; su vida a Cristo y pas&oacute; de la oscuridad y desesperanza de los dominios de Satan&aacute;s, al reino del Hijo Amado de Dios.</p>

<p>&iquest;Ha sido usted enga&ntilde;ado por su enemigo Satan&aacute;s? &iquest;Alguna vez ha pensado que deber&iacute;a ser una persona mejor antes de que Dios lo acepte? &iquest;Le ha inducido su enemigo a cuestionar si Dios realmente lo ama? &iquest;Ha causado que usted se sienta c&oacute;modo al desobedecer a Dios?</p>

<p>No importa qu&eacute; influencia pueda estar apart&aacute;ndolo de Cristo, yo le animo a salir de esa influencia - y volverse a Cristo.</p>

<p>Para estar seguro de que usted es cristiano, deber&aacute; conocer estas verdades b&aacute;sicas de la Biblia. No solamente debe usted creer estas verdades intelectualmente, sino como un acto de su voluntad, usted debe aceptarlas y hacerlas parte central en su vida.</p>

<p>Esto comienza sabiendo que Dios le ama y le ofrece un plan maravilloso para su vida. Dios quiere lo mejor para usted. A &Eacute;l le interesan sus necesidades y ha provisto un camino para que usted conozca Su amor y el plan para su vida.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc1-2.png" style="float:right; width:30%" />Sin embargo, usted es pecador y est&aacute; separado de Dios; por lo tanto, no puede experimentar Su amor y el plan que &Eacute;l tiene para su vida hasta que suceda algo maravilloso.</p>

<p>Usted ha sido creado para tener comuni&oacute;n con Dios, pero debido a su terca voluntad ego&iacute;sta, usted al igual que todas las personas, ha escogido su propio camino. Esta voluntad ego&iacute;sta, contra la que todos luchamos, est&aacute; caracterizada por una actitud de rebeli&oacute;n activa contra Dios o indiferencia pasiva hacia &Eacute;l. La Biblia llama a esta voluntad ego&iacute;sta &ldquo;pecado.&rdquo; A causa de sus pecados usted est&aacute; muerto espiritualmente y separado de Dios.</p>

<p>Dios es santo y las personas son pecadoras. Un gran abismo los separa. Las personas intentan alcanzar a Dios y la vida abundante a trav&eacute;s de sus propios esfuerzos, tales como vivir una vida buena, mantener ciertas filosof&iacute;as y practicar una religi&oacute;n. Pero ning&uacute;n esfuerzo humano capacita a la persona para alcanzar a Dios.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ LA &Uacute;NICA PROVISI&Oacute;N DE DIOS</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->

<p>Jesucristo es la &uacute;nica provisi&oacute;n de Dios para sus pecados. Por medio de &Eacute;l usted puede conocer y experimentar el amor y el plan de Dios para su vida.</p>

<p>&iquest;Qui&eacute;n es Jesucristo? &iquest;Por qu&eacute; puede &Eacute;l cruzar este abismo entre un Dios santo y el hombre pecador?</p>

<p>El nacimiento milagroso de Jes&uacute;s, la vida que vivi&oacute;, los milagros que realiz&oacute;, las palabras que habl&oacute;, su muerte en la cruz, su resurrecci&oacute;n de la muerte, su ascensi&oacute;n a los cielos - todo indica que &Eacute;l no era meramente un hombre, era Dios.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc1-3.png" style="float:right; width:50%" />Usted debe recibir a Jesucristo como Dios, como su Salvador y su Se&ntilde;or. Al recibir a Cristo usted puede conocer y experimentar el amor y el plan de Dios para su vida. Usted recibe a Cristo por medio de la fe, invit&aacute;ndolo personalmente a su vida. Pablo dijo, &ldquo;Por gracia sois salvos por medio de la fe y esto no de vosotros pues es don de Dios, no por obras para que nadie se glor&iacute;e.&rdquo;</p>

<p>Y Jes&uacute;s dice, &ldquo;He aqu&iacute;, Yo estoy a la puerta y llamo; si alguno oye mi voz y abre la puerta, entrar&eacute; a &eacute;l, y cenar&eacute; con &eacute;l y &eacute;l conmigo.&rdquo;</p>

<p>El recibir a Cristo, empieza cuando uno se aparta de su vida egoc&eacute;ntrica, arrepinti&eacute;ndose de sus pecados y volvi&eacute;ndose a Dios. Esto incluye confiar en que Cristo entra a su vida, perdona sus pecados y le hace la persona que &Eacute;l quiere que sea.</p>

<p>Perm&iacute;tame ilustrarlo de la siguiente manera: Suponga que usted llega a conocer a un cierto joven o se&ntilde;orita acerca de quien usted ha recibido muy buenas referencias. A usted le gusta lo que ve - su apariencia, personalidad y muchas otras cualidades. &iquest;Ser&iacute;a eso suficiente para concertar un matrimonio?</p>

<p>No. En un matrimonio se requiere m&aacute;s que admiraci&oacute;n y respeto mutuo.</p>

<p>Conforme usted conoce m&aacute;s a la persona, usted se enamora. &iquest;Ser&aacute; eso suficiente para celebrar un matrimonio?</p>

<p>No. En un matrimonio se requiere m&aacute;s que el intelecto y las emociones.</p>

<p>Luego usted se compromete y llega el d&iacute;a de la boda. &iexcl;Qu&eacute; emocionante! Usted cree intelectualmente que &eacute;l o ella es la persona m&aacute;s maravillosa en todo el mundo.</p>

<p>Emocionalmente, su coraz&oacute;n late dos veces m&aacute;s r&aacute;pido cuando ustedes est&aacute;n juntos.</p>

<p>Pero ahora se va a llevar a cabo algo m&aacute;s importante. Al estar frente al ministro o sacerdote para intercambiar los votos matrimoniales, comprometen sus voluntades el uno al otro. La boda no es un matrimonio verdadero sin una entrega mutua.</p>

<div class="block-quote">Si usted est&aacute; viviendo una vida dirigida por Cristo, usted se est&aacute; rindiendo a Cristo, y sus intereses est&aacute;n controlados por &Eacute;l, lo cual resulta en armon&iacute;a con el plan de Dios para su vida.</div>

<address>&nbsp;</address>

<p>Lo mismo sucede, cuando usted se hace cristiano. Cuando usted se compromete a Cristo, usted debe entregarse a &Eacute;l, debe darse totalmente, entregando su intelecto, sus emociones y su voluntad.</p>

<p>Su vida se puede apreciar de dos maneras. Si usted est&aacute; viviendo una vida centrada en s&iacute; mismo, usted controla sus intereses. Esta vida siempre tiene como resultado discordia y frustraci&oacute;n.</p>

<p>Si usted est&aacute; viviendo una vida dirigida por Cristo, usted se est&aacute; rindiendo a Cristo, y sus intereses est&aacute;n controlados por &Eacute;l, lo cual resulta en armon&iacute;a con el plan de Dios para su vida.</p>

<p>Nuestras vidas se parecen a la de una oruga que se arrastra por el suelo - un horrible y peludo gusano. Un d&iacute;a este gusano teje un capullo alrededor de su cuerpo y de este capullo emerge una preciosa mariposa. No entendemos totalmente lo que ha sucedido, pero nos damos cuenta que lo que antes era una horrible oruga que se arrastraba por el polvo, ahora es una mariposa que revolotea por el aire.</p>

<p>As&iacute; tambi&eacute;n sucede en la vida del cristiano. Mientras en un tiempo viv&iacute;amos en el nivel m&aacute;s bajo como individuos pecadores y ego&iacute;stas, ahora al confiar y obedecer a Dios, vivimos en el plano m&aacute;s alto, experimentando vidas llenas y abundantes como hijos de Dios. Esto comienza al recibir a Jesucristo como Salvador y Se&ntilde;or de su vida.</p>

<p>Hace algunos a&ntilde;os, una mujer que reci&eacute;n hab&iacute;a recibido a Jesucristo por medio del testimonio de uno de los coordinadores, me pidi&oacute; que hablara a sus padres acerca de Cristo. El padre era el fundador de una de las organizaciones comerciales m&aacute;s grandes del mundo de esa &eacute;poca. Yo lo visit&eacute; en su hermosa casa. Era aqu&eacute;l verdaderamente un gran hombre. Su porte, sus gestos y palabras, todo en &eacute;l suger&iacute;a que era verdaderamente un gran estadista.</p>

<p>Me mostr&oacute; cuarto tras cuarto lleno de trofeos, placas y fotograf&iacute;as suyas con reyes, presidentes y toda clase de personajes famosos. Era tambi&eacute;n un gran fil&aacute;ntropo ya que hab&iacute;a donado cientos de millones de d&oacute;lares a causas muy dignas y meritorias.</p>

<p>Despu&eacute;s de unos momentos coment&oacute;, &ldquo;Mi hija me dijo que usted ten&iacute;a algo importante que hablar conmigo.&rdquo;</p>

<p>Con esta invitaci&oacute;n, comenc&eacute; a hablar con &eacute;l acerca de su relaci&oacute;n con Cristo. Era una persona muy amable y afectuosa. Se notaba que ten&iacute;a un verdadero inter&eacute;s.</p>

<p>Compart&iacute; con &eacute;l las palabras del Se&ntilde;or Jesucristo en su exhortaci&oacute;n a Nicodemo. Este era un dirigente jud&iacute;o, profundamente religioso y con una vida moral e irreprochable. Le le&iacute; el cap&iacute;tulo 3 del Evangelio de San Juan:</p>

<div class="quote-left">
<p>Respondi&oacute; Jes&uacute;s y le dijo:</p>

<p>De cierto, de cierto te digo que el que no naciere de nuevo, no puede ver el reino de Dios.&rdquo;</p>

<p>&iquest;C&oacute;mo puede un hombre nacer siendo viejo?&raquo; Nicodemo respondi&oacute;. &laquo;&iquest;Puede acaso entrar por segunda vez en el vientre de su madre, y nacer?&raquo;</p>

<p>Respondi&oacute; Jes&uacute;s: &ldquo;De cierto, de cierto te digo, que el que no naciere de agua y del Esp&iacute;ritu, no puede entrar en el reino de Dios. Lo que es nacido de la carne, carne es; y lo que es nacido del Esp&iacute;ritu, esp&iacute;ritu es.</p>
</div>

<p>En este momento, este apreciable anciano, que contaba alrededor de ochenta a&ntilde;os me dijo, &ldquo;Sr. Bright, he sido el presidente de la Junta de Consejeros de mi iglesia durante cincuenta a&ntilde;os, &iexcl;y nadie me hab&iacute;a dicho que ten&iacute;a que recibir a Cristo como mi Salvador o que ten&iacute;a que nacer de nuevo! &iquest;Cree usted, a la luz de las cosas buenas que he hecho a trav&eacute;s de los a&ntilde;os, que yo debo nacer de nuevo?&rdquo;</p>

<p>Yo le expliqu&eacute;, &ldquo;No soy yo quien est&aacute; sugiriendo la necesidad de que usted nazca de nuevo. Fue Jesucristo quien le dijo a Nicodemo, un importante l&iacute;der religioso: &lsquo;Es necesario que nazcas otra vez&rsquo;.&rdquo; Luego yo le pregunt&eacute;, &ldquo;&iquest;Le gustar&iacute;a nacer de nuevo?&rdquo; &ldquo;S&iacute;, me gustar&iacute;a,&rdquo; contest&oacute;.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary7" class="summary"><h2>+ USTED PUEDE ESTAR SEGURO</h2></div>
<div class="collapsed" id ="Text7">
<!-- end default revealSummary -->

<p>Usted puede decir, &ldquo;Yo creo que Jesucristo es el hijo de Dios y que &Eacute;l muri&oacute; por mis pecados. &iquest;No me hace eso cristiano?&rdquo; En realidad no, si ha rehusado usted rendirle su voluntad.</p>

<p>O tal vez diga, &ldquo;Escuch&eacute; un serm&oacute;n maravilloso, me sent&iacute; muy emocionado y tuve una gran experiencia espiritual. Inclusive respond&iacute; a la invitaci&oacute;n de pasar adelante para recibir consejo. &iquest;Con eso no soy cristiano?&rdquo; No, no lo es, si usted nunca ha abdicado el trono de su vida, su voluntad, a Cristo.</p>

<p>Entonces, &iquest;c&oacute;mo puede estar seguro de ser cristiano? &iquest;Existe acaso alg&uacute;n tipo de confirmaci&oacute;n que Dios da a los que reciben a Cristo con sinceridad? Yo creo que hay una triple confirmaci&oacute;n de que Jesucristo est&aacute; en nuestras vidas<img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc1-4.png" style="width:100%" /></p>

</div>

<!-- begin default revealSummary -->
<div id="Summary8" class="summary"><h3>+ 1. El testimonio externo de la Palabra de Dios - La Biblia</h3></div>
<div class="collapsed" id ="Text8">
<!-- end default revealSummary -->

<p>Las promesas de la Palabra de Dios y no sus sentimientos, deben ser su autoridad. La Biblia es totalmente confiable. Como cristiano, usted debe vivir por fe en la fidelidad de Dios y su Palabra santa e inspirada.</p>

<p>Por a&ntilde;os, Mart&iacute;n Lutero, el padre de la Reforma, hab&iacute;a intentado ganar su salvaci&oacute;n por medio de su dedicaci&oacute;n religiosa y sus buenas obras. Cuando descubri&oacute; la gran verdad b&iacute;blica de que &ldquo;El justo por la fe vivir&aacute;&rsquo;&rsquo;, su vida fue cambiada totalmente, y nunca m&aacute;s se preocup&oacute; por la seguridad de su destino eterno en Cristo. Crey&oacute; lo que la Palabra de Dios ten&iacute;a que decir y tuvo plena seguridad de su salvaci&oacute;n.</p>

<p>John Wesley, fundador de la Iglesia Metodista, cuando joven no estaba seguro de su salvaci&oacute;n, a pesar de que fue hijo de un ministro religioso, l&iacute;der del Club Santo de Oxford y misionero a los Indios de Am&eacute;rica. Posteriormente al regresar a Inglaterra, conoci&oacute; a Jesucristo en una reuni&oacute;n en Aldersgate. All&iacute; escuch&oacute; la lectura del tratado sobre la fe de Mart&iacute;n Lutero, como prefacio a la Ep&iacute;stola a los Romanos. Wesley explic&oacute; en su autobiograf&iacute;a lo que sucedi&oacute; en esa ocasi&oacute;n. &ldquo;Quince minutos antes de las nueve, mientras &eacute;l estaba describiendo el cambio que Dios obra en el coraz&oacute;n por medio de la fe en Cristo, sent&iacute; que mi coraz&oacute;n ard&iacute;a en forma extra&ntilde;a.</p>

<p>Supe que verdaderamente estaba confiando en Cristo, y solamente en Cristo, para mi salvaci&oacute;n. Tuve la seguridad de que &Eacute;l hab&iacute;a tomado los pecados, a&uacute;n los m&iacute;os, y me hab&iacute;a salvado de la ley del pecado y de la muerte.&rdquo;</p>

<p>Antes de la experiencia en Aldersgate, Wesley se hab&iacute;a enfrascado en un esfuerzo fren&eacute;tico para tratar de ganarse la salvaci&oacute;n de Dios por sus buenas obras. All&iacute;, en Aldersgate recibi&oacute; la seguridad de la salvaci&oacute;n de Dios por fe.</p>

<p>En la primera Ep&iacute;stola de Juan 5:11,12 se nos confirma que Cristo est&aacute; en su vida si usted lo invita y lo recibe:</p>

<div class="quote-left">Este es el testimonio: que Dios nos ha dado vida eterna; y esta vida est&aacute; en Su Hijo. El que tiene al Hijo, tiene la vida; el que no tiene al Hijo de Dios no tiene la vida.</div>

<address>&nbsp;</address>

<p>En San Juan 1:12, 13 se confirma esta promesa:</p>

<div class="quote-right">Mas a todos los que le recibieron, a los que creen en Su nombre, les di&oacute; potestad de ser hechos hijos de Dios; los cuales no son engendrados de sangre, ni de voluntad de carne, ni de voluntad de var&oacute;n, sino de Dios.</div>

<p>Un doctor y su esposa residentes en Zurich, Suiza, enviaron a su hijo a la Universidad de California en Los &Aacute;ngeles, para terminar sus estudios de doctorado en Meteorolog&iacute;a. Su hijo Hans recibi&oacute; a Cristo en una de nuestras reuniones y le escribi&oacute; a sus padres acerca de su reciente experiencia de fe.</p>

<p>El muchacho mencion&oacute; mi nombre como alguien que le hab&iacute;a hablado de Cristo. Ellos contestaron por carta pregunt&aacute;ndole si podr&iacute;a concertar una cita conmigo para que ellos tambi&eacute;n pudieran recibir a Cristo. Incurriendo en grandes gastos el padre, la madre y su hermana, volaron desde Zurich a Los &Aacute;ngeles con el prop&oacute;sito expreso de hacerse cristianos.</p>

<p>Esto sucedi&oacute; al comienzo del ministerio de la Cruzada Estudiantil y Profesional para Cristo. Nunca antes alguien se hab&iacute;a tomado la molestia de venir a verme para algo as&iacute;, sin embargo, estas personas estaban cubriendo la gran distancia desde Zurich. Para m&iacute; fue un momento muy emocionante el recibir en mi oficina a este hombre de gran influencia y medios econ&oacute;micos, junto con su familia.</p>

<p>&Eacute;l comenz&oacute; nuestra reuni&oacute;n relatando su propia experiencia espiritual. &ldquo;Fui ateo durante a&ntilde;os,&rdquo; dijo, &ldquo;pero no encontr&eacute; futuro en el ate&iacute;smo. Entonces, comenc&eacute; a estudiar las religiones orientales. Nuevamente no tuve satisfacci&oacute;n. Entonces alguien me dijo que encontrar&iacute;a las respuestas que necesito en el Nuevo Testamento de La Biblia. Comenc&eacute; a leerlo y qued&eacute; convencido de que Jes&uacute;s era aquel a quien yo hab&iacute;a estado buscando. Despu&eacute;s recib&iacute; la carta de Hans dici&eacute;ndonos que usted le hab&iacute;a ayudado a ser cristiano. Nosotros queremos que usted nos diga lo que le dijo a Hans.&rdquo;</p>

<p>Ya se puede usted imaginar c&oacute;mo me sent&iacute;a. &iexcl;Qu&eacute; privilegio era hablar con esta maravillosa pareja sobre nuestro Salvador, el Cristo vivo!</p>

<p>Le expliqu&eacute; c&oacute;mo ellos pod&iacute;an recibir a Cristo simplemente invit&aacute;ndole a que entrara en sus vidas. El me interrumpi&oacute;. Sr. Bright dijo, &ldquo;Ya lo he hecho. Recibo a Cristo en mi coraz&oacute;n todos los d&iacute;as. En algunas ocasiones se lo he pedido varias veces en un mismo d&iacute;a.&rdquo;</p>

<p>Entonces s&iacute; me sent&iacute; confundido. Como en esos d&iacute;as era relativamente nuevo en guiar a las personas al Se&ntilde;or, no sab&iacute;a qu&eacute; decir. Or&eacute; en silencio, &ldquo;Dios m&iacute;o, &iexcl;Ay&uacute;dame! &iquest;Qu&eacute; le digo ahora?&raquo;</p>

<p>Como en una pantalla, cruz&oacute; por mi mente el pasaje b&iacute;blico de la Ep&iacute;stola a los Efesios 2:8,9:</p>

<div class="quote-left">Porque por gracia sois salvos por medio de la fe; y esto no de vosotros, &laquo; pues es don de Dios; no por obras, para que nadie se glor&iacute;e.</div>

<p>Le expliqu&eacute; que no es suficiente pedir que Jes&uacute;s entre en su vida, es necesario creer que &Eacute;l vendr&aacute; como lo ha prometido. La fe dice, &ldquo;Yo s&eacute; que Jesucristo es el Hijo de Dios.&rdquo; La fe dice: &ldquo;Yo s&eacute; que Cristo muri&oacute; por mis pecados.&rdquo; La fe dice: &ldquo;S&eacute; que si yo le abro la puerta de mi coraz&oacute;n, &Eacute;l entrar&aacute;.&raquo; La fe dice: &ldquo;Cuando &Eacute;l entre, usted ser&aacute; un hijo de Dios.&rdquo; La fe dice, &ldquo;Yo s&eacute; que cuando recibo a Jes&uacute;s en mi vida, tengo vida eterna.&rdquo;</p>

<p>Le dije a la pareja, &ldquo;Dios premia la fe, y no s&oacute;lo la invitaci&oacute;n que ustedes le hacen para entrar. Lo que &Eacute;l honra es su fe en &Eacute;l y en Su promesa de que, si ustedes abren la puerta, &Eacute;l entrar&aacute;.</p>

<p>Ustedes pueden pedir a Jesucristo que entre en sus vidas miles de veces, y &Eacute;l nunca vendr&aacute; a menos que lo crean, bas&aacute;ndose en Su promesa. Ustedes pueden confiar en que &Eacute;l mantendr&aacute; Su promesa de entrar en su vida si se lo piden como una expresi&oacute;n de fe y confianza.&rdquo;</p>

<p>Les suger&iacute; que invitaran a Jesucristo en sus vidas una vez m&aacute;s y que esta vez lo hicieran creyendo en Su promesa espec&iacute;fica de que, al abrir la puerta, &Eacute;l entrar&iacute;a y que &ldquo;a todos los que le recibieren a los que creen en Su nombre, les da potestad de ser hechos hijos de Dios.&rdquo;</p>

<p>A&uacute;n antes de orar, el semblante del padre se ilumin&oacute; con la seguridad de su salvaci&oacute;n, y comenz&oacute; a re&iacute;r. &Eacute;l estaba lleno de asombro, gratitud, alivio, alabanza y agradecimiento. Al fin hab&iacute;a encontrado a Aqu&eacute;l a quien hab&iacute;a buscado por a&ntilde;os.</p>

<p>Se volvi&oacute; a su amada esposa y le habl&oacute; en alem&aacute;n, dici&eacute;ndole lo que yo hab&iacute;a compartido con &eacute;l. Ella comenz&oacute; a re&iacute;r con lo que yo m&aacute;s tarde descubr&iacute; que era una risa santa, una risa de seguridad. Ellos hab&iacute;an estado buscando a Dios, y ahora se hab&iacute;a encendido la luz en sus corazones y esto los llenaba de gozo.</p>

<p>Encontraron al Salvador, y &iexcl;cu&aacute;nto hab&iacute;a cambiado su vida! M&aacute;s tarde esa misma noche, tuve el privilegio de orar con su hija, quien tambi&eacute;n recibi&oacute; a Cristo. Toda la familia - padre, madre, hermano y hermana - se unieron en Cristo. Despu&eacute;s, tuve la oportunidad de visitarlos en Zurich y ver mucho m&aacute;s del milagro de la gracia de Dios en sus vidas.</p>

<p>M&aacute;s tarde en otra ocasi&oacute;n, tuve la oportunidad de contar esta historia a un grupo de personas reunidas en una de nuestros seminarios de capacitaci&oacute;n. Al terminar se acerc&oacute; una mujer a hablar conmigo. Ten&iacute;a alrededor de ochenta a&ntilde;os, sus cabellos eran blancos como la nieve y su rostro radiante estaba perlado de l&aacute;grimas.</p>

<p>Ella me dijo, &ldquo;He sido maestra de Escuela Dominical en mi iglesia por m&aacute;s de cuarenta a&ntilde;os. Todos los d&iacute;as le he pedido a Jes&uacute;s que entre en mi vida, y nunca estuve segura de que estuviera all&iacute;. Esta noche, al contar usted la historia del hombre de Suiza, le ped&iacute; al Se&ntilde;or con fe y por &uacute;ltima vez, que entrara a mi coraz&oacute;n. Ahora yo s&eacute; que &Eacute;l est&aacute; en m&iacute; porque dijo que entrar&iacute;a. Jes&uacute;s prometi&oacute; que nunca me dejar&iacute;a, ni me desamparar&iacute;a. Ya no voy a insultarlo m&aacute;s pidi&eacute;ndoselo de nuevo. Como una expresi&oacute;n de fe y por el resto de mi vida, voy a comenzar cada d&iacute;a agradeci&eacute;ndole a Jes&uacute;s por estar conmigo, como &Eacute;l prometi&oacute;.&raquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary9" class="summary"><h3>+ 2. El testimonio interior del Esp&iacute;ritu Santo</h3></div>
<div class="collapsed" id ="Text9">
<!-- end default revealSummary -->

<p>El ap&oacute;stol Pablo escribe, &ldquo;el Esp&iacute;ritu mismo da testimonio a nuestro esp&iacute;ritu, de que somos hijos de Dios.&rdquo; Pablo enfatiza la validez de esta fuente interior de seguridad a los Tesalonicenses convertidos:</p>

<div class="quote-left">Pues nuestro evangelio no lleg&oacute; a vosotros en palabras solamente, sino tambi&eacute;n en poder, en el Esp&iacute;ritu Santo y en plena certidumbre, como &laquo; bien sab&eacute;is cu&aacute;les fuimos entre vosotros por amor a vosotros.</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary10" class="summary"><h3>+ 3. Una vida transformada</h3></div>
<div class="collapsed" id ="Text10">
<!-- end default revealSummary -->

<p>Su vida transformada es un testimonio de que usted es cristiano. El ap&oacute;stol Pablo dice: &ldquo;De modo que si alguno est&aacute; en Cristo, nueva criatura es; las cosas viejas pasaron; he aqu&iacute; todas son hechas nuevas.&rdquo;</p>

<p>San Juan dice, &ldquo;lo que hemos visto y o&iacute;do, eso os anunciamos, para que tambi&eacute;n vosotros teng&aacute;is comuni&oacute;n con nosotros; y nuestra comuni&oacute;n verdaderamente es con el Padre, y con su Hijo Jesucristo.&rdquo;</p>

<p>Recuerdo muy bien la noche que hice esta oraci&oacute;n: &ldquo;Dios m&iacute;o, &iquest;qu&eacute; es lo que quieres que yo haga con mi vida?&rdquo; Fue una oraci&oacute;n sencilla, silenciosa. Pero yo sab&iacute;a lo que estaba diciendo y Dios me escuch&oacute;.</p>

<p>Mi vida comenz&oacute; a cambiar gradualmente conforme estudiaba La Biblia con otros creyentes, en la Primera Iglesia Presbiteriana de Hollywood. Conforme pas&oacute; el tiempo, comenc&eacute; a sentir la seguridad del amor y perd&oacute;n de Dios. Mi relaci&oacute;n con &Eacute;l se convirti&oacute; en la experiencia m&aacute;s importante de mi vida.</p>

<p>Si usted nunca ha recibido a Jesucristo personalmente, o si tiene alguna duda acerca de su salvaci&oacute;n, usted lo puede recibir ahora mismo por fe. Usted puede abrir la puerta de su vida a Cristo expresando su fe en &Eacute;l por medio de la oraci&oacute;n. Las frases que siguen son una oraci&oacute;n sugerida que pueden expresar su deseo:</p>

<div class="quote-right">Se&ntilde;or Jesucristo, te necesito. Gracias por morir en la cruz por mis pecados. Te abro la puerta de mi vida y te recibo como mi Se&ntilde;or y Salvador. Gracias por perdonar mis pecados y por darme vida abundante y eterna. Toma control de mi vida. Hazme la persona que t&uacute; quieres que yo sea.</div>

<p>Usted no se convierte en cristiano s&oacute;lo por hacer esta o cualquier otra oraci&oacute;n. Usted viene a ser cristiano por fe y s&oacute;lo por fe. Fe es colocar su confianza en Dios y en Sus promesas. Le animo a decir esta oraci&oacute;n en voz alta y con fe, porque es a trav&eacute;s de la oraci&oacute;n, hablando con Dios, que usted mejor puede expresar su fe en Cristo y las promesas de Su Palabra.</p>

<p>Si usted ha invitado a Jesucristo en su vida, puede estar seguro de que &Eacute;l ya est&aacute; en su vida y que le ha dado la vida eterna como lo prometi&oacute;.</p>

<p>Jesucristo nunca le enga&ntilde;ar&iacute;a. Puede estar seguro de que si usted le invit&oacute; a entrar en su vida, &Eacute;l ahora vive dentro de usted y le dar&aacute; la vida abundante y eterna que le prometi&oacute;.</p>

<p>Le animo, ahora mismo, a agradecer a Dios por Su fidelidad y por Su presencia en su vida. No dependa de sus sentimientos. La Palabra de Dios es su autoridad. La fe y la obediencia siempre traen como resultado una mejor percepci&oacute;n de la presencia del Se&ntilde;or.</p>

<p>Comience a pasar tiempo cada d&iacute;a en estudio b&iacute;blico y oraci&oacute;n. Es mejor separar un tiempo diario para esto y convertirlo en h&aacute;bito. Esto le ayudar&aacute; a crecer y madurar en su fe.</p>

<div class="block-quote">Si usted ha invitado a Jesucristo en su vida, puede estar seguro de que &Eacute;l ya est&aacute; en su vida y que le ha dado la vida eterna como lo prometi&oacute;.</div>

<p>Procure asociarse con cristianos din&aacute;micos, positivos y entusiastas. Si usted no pertenece a una iglesia local, no espere ser invitado. Tome la iniciativa; llame al ministro de una iglesia cercana donde Cristo sea honrado y donde se predique la Palabra de Dios. Haga planes para empezar a asistir esta semana. Si usted no ha sido bautizado todav&iacute;a, haga planes de hacerlo como una expresi&oacute;n externa de su identificaci&oacute;n con Cristo.</p>

<p>Ahora que usted est&aacute; seguro de ser cristiano, le animo a experimentar el gozo de ayudar a otros a recibir a Cristo. Comparta su fe en Cristo con sus amigos y vecinos en toda oportunidad que se le presente. El ap&oacute;stol Pablo estaba tan emocionado acerca de Jesucristo, que en su Ep&iacute;stola a los Colosenses 1:28 dice: &ldquo;a quien anunciamos, amonestando a todo hombre, y ense&ntilde;ando a todo hombre en toda sabidur&iacute;a, a fin de presentar perfecto en Cristo Jes&uacute;s a todo hombre.&rdquo;</p>

<p>Tome la iniciativa de hablar con alguien que conozca, acerca de la persona y ense&ntilde;anzas de nuestro Se&ntilde;or Jesucristo y el modo revolucionario en que &Eacute;l puede cambiar las vidas y c&oacute;mo otros tambi&eacute;n pueden estar seguros de ser cristianos.</p>

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

			<td class="social" @click="share('lesson', '¿CÓMO PUEDE  ESTAR SEGURO  DE CONOCER A  DIOS?: ', '/content/M2/spa/tc/tc01.html')">
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