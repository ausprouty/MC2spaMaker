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
                        <div class="chapter_number ltr"><h1>3.</h1></div>
                        <div class="chapter_title ltr"><h1>¿CÓMO PUEDE  USTED SER  LLENO DEL  ESPÍRITU  SANTO?</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
    <button id="MC2/spa/audio/tc/CT 3.mp3" type="button" class="external-audio">
        Escuchar &nbsp;"&iquest;C&Oacute;MO PUEDE USTED SER LLENO DEL ESP&Iacute;RITU SANTO?"&nbsp;</button>
        <div class="collapsed"></div>
    

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ LA MARAVILLOSA NOTICIA DE LA VIDA LLENA DEL ESP&Iacute;RITU</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p>El experimentado pastor de una de las iglesias m&aacute;s importantes de Estados Unidos, se acerc&oacute; para hablar conmigo despu&eacute;s de mi conferencia sobre &ldquo;C&oacute;mo ser lleno del Esp&iacute;ritu Santo.&rdquo; Me dijo: &laquo;&iexcl;Mi vida nunca volver&aacute; a ser la misma despu&eacute;s de esta noche! He sido pastor por m&aacute;s de veinte a&ntilde;os, pero hasta ahora, no hab&iacute;a comprendido c&oacute;mo ser controlado y dirigido por el Esp&iacute;ritu Santo como una manera de vivir. Estoy anticipando el compartir esto con los miembros de mi propia iglesia...&rdquo;</p>

<p>Un hombre de negocios jubilado y su esposa, vinieron a mi oficina desde el otro extremo del continente para expresarme su entusiasmo. - &ldquo;Nuestras vidas fueron cambiadas totalmente cuando aprendimos c&oacute;mo ser llenos del Esp&iacute;ritu Santo como resultado de su ministerio. Ahora hablamos de Cristo con otras personas en todo lugar a donde vamos,&rdquo; - me dijeron.</p>

<p>Ellos me entregaron un cheque generoso y una petici&oacute;n. - &ldquo;Hemos venido a pedirle que comparta por televisi&oacute;n c&oacute;mo ser llenos del Esp&iacute;ritu Santo, para que lo escuchen millones de personas. Deseamos que otros cristianos experimenten la realidad del Esp&iacute;ritu Santo en sus vidas, as&iacute; como nosotros...&rdquo;</p>

<p>Al concluir una de mis conferencias, un hombre se acerc&oacute; casi precipit&aacute;ndose por el pasillo. - &ldquo;&iexcl;Esto es lo m&aacute;s extraordinario que he escuchado en mi vida!&rdquo; - comenz&oacute; diciendo- &ldquo;&iexcl;Hoy he sido liberado!&rdquo; Este hombre era parte de un grupo de doce directivos de varias organizaciones cristianas. - &ldquo;He estado tratando de servir a Dios con mucha diligencia y pr&aacute;cticamente descuide mis negocios y mi familia. He estado tratando de servir a Dios en la energ&iacute;a de la carne. &iexcl;Ahora comprendo por qu&eacute; he sido tan infeliz y tan poco fruct&iacute;fero!&rdquo; - exclam&oacute;.</p>

<p>Todas estas personas fueron liberadas de lo que considero ser una de las mayores calamidades que existen actualmente en el cuerpo de Cristo. Esta plaga espiritual puede ser hallada en el centro mismo de todos los&nbsp;problemas que da&ntilde;an a la Iglesia en todo el mundo. La enfermedad de la que estoy hablando es una epidemia de mundanalidad y carnalidad que parece envolverlo todo.</p>

<p>Algunas versiones de la Biblia usan diferentes palabras para el t&eacute;rmino &ldquo;carnal&rdquo; referido en I Corintios 3:3.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ &iquest;POR QU&Eacute; NECESITA USTED SER LLENO DEL ESP&Iacute;RITU SANTO?</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p>Aprender c&oacute;mo ser lleno (controlado y dirigido) por el Esp&iacute;ritu Santo por fe, puede ser el descubrimiento m&aacute;s importante de su vida cristiana. Considere cuidadosamente las &uacute;ltimas palabras del Se&ntilde;or Jesucristo cuando estaba con sus disc&iacute;pulos en el Monte de los Olivos, pocos momentos antes de que ascendiera a los cielos. Jes&uacute;s les hab&iacute;a ordenado a sus disc&iacute;pulos ir por todo el mundo y predicar el evangelio y hacer disc&iacute;pulos a todas las naciones. Sin embargo, les hab&iacute;a dicho tambi&eacute;n que no se salieran de Jerusal&eacute;n, hasta que fueran llenos con el poder del Esp&iacute;ritu Santo.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc3-1.png" style="float:right; width:50%" />&ldquo;Pero recibir&eacute;is poder, cuando haya venido sobre vosotros el Esp&iacute;ritu Santo,&rdquo; dijo, &ldquo;Y me ser&eacute;is testigos en Jerusal&eacute;n, en toda Judea, en Samaria, y hasta lo &uacute;ltimo de la tierra.&rdquo;</p>

<p>Por medio de estas palabras, Jes&uacute;s est&aacute; indicando: &ldquo;Aunque ustedes han estado conmigo por m&aacute;s de tres a&ntilde;os, no es suficiente que me hayan o&iacute;do ense&ntilde;ar a las multitudes, y que hayan presenciado mis sanidades y que me hayan visto vencer a la misma muerte. Ustedes deben ser capacitados por el Esp&iacute;ritu Santo para ser mis testigos efectivos y fruct&iacute;feros por todo el mundo.&rdquo;</p>

<p>Un pr&oacute;spero hombre de negocios lleg&oacute; a Arrowhead Springs, lugar de nuestra sede internacional en California, con el prop&oacute;sito de asistir a una capacitaci&oacute;n. Este, era el hijo de un ministro cristiano, hab&iacute;a sido educado bajo la buena influencia de la iglesia, hab&iacute;a sido superintendente y maestro de la Escuela Dominical durante a&ntilde;os, di&aacute;cono, miembro de la Junta Directiva de uno de los seminarios teol&oacute;gicos m&aacute;s importantes del pa&iacute;s, y hasta fue presidente laico de su denominaci&oacute;n.. Sin embargo, este hombre nunca le hab&iacute;a hablado a nadie m&aacute;s de Cristo.</p>

<p>Durante la capacitaci&oacute;n, aprendi&oacute; c&oacute;mo ser lleno del Esp&iacute;ritu Santo por fe y tambi&eacute;n c&oacute;mo presentar a otros a Cristo. Desde ese momento, ha guiado personalmente a cientos de personas a Cristo y ha capacitado a miles de laicos y pastores a trav&eacute;s de nuestro Instituto de Evangelizaci&oacute;n para Laicos. Otros miles m&aacute;s, han conocido a Cristo por medio de aquellos a quienes &eacute;l capacit&oacute;.</p>

<p>El pastor de una iglesia de 1.500 miembros se apropi&oacute; la llenura del Esp&iacute;ritu Santo en un Instituto de Evangelizaci&oacute;n para Pastores en Arrowhead Springs y aprendi&oacute; c&oacute;mo hablarle de Cristo a otros, en manera personal. Durante una tarde dedicada a la evangelizaci&oacute;n del vecindario, catorce de las quince personas a quienes este pastor entrevist&oacute;, recibieron a Cristo. Nunca antes hab&iacute;a tenido tal experiencia. Cuando regres&oacute; a su p&uacute;lpito, parec&iacute;a ser otro hombre. Muy pronto, cientos de miembros de su iglesia, al igual que &eacute;l, se hab&iacute;an apropiado la llenuradel Esp&iacute;ritu Santo por fe. Ellos comenzaron a compartir su entusiasmo por Cristo y por medio de su testimonio, muchos m&aacute;s respondieron aceptando a nuestro Salvador.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc3-2.png" style="width:100%" /></p>

<p>La vida cristiana es realmente una gran aventura. Es una vida con prop&oacute;sito y poder. Cristo nos ha dado una promesa que nos parece incre&iacute;ble, &laquo;De cierto, de cierto os digo: El que en m&iacute; cree, las obras que yo hago, &Eacute;l las har&aacute; tambi&eacute;n; y aun mayores har&aacute; porque yo voy al Padre. Y todo lo que pidiereis al Padre en mi nombre, lo har&eacute; para que el Padre sea glorificado en el Hijo. Si algo pidiereis en mi nombre, yo lo har&eacute;.&rdquo;</p>

<p>Naturalmente en nuestras propias fuerzas, nosotros no podemos lograr estas grandes obras. Es Cristo mismo, viviendo en nosotros en todo el poder de su resurrecci&oacute;n, movi&eacute;ndose mediante nuestro cuerpo, pensando con nuestra mente, amando con nuestro coraz&oacute;n, hablando con nuestros labios - quien nos capacita con el Esp&iacute;ritu Santo para hacer esas grandes obras. No es pues nuestra sabidur&iacute;a, nuestra elocuencia, nuestra l&oacute;gica, nuestra personalidad tan popular o nuestra persuasi&oacute;n, lo que traer&aacute; a las personas a los pies del Salvador. Es el Hijo del Hombre, quien vino a buscar y salvar lo que se hab&iacute;a perdido, quien envi&oacute; su Santo Esp&iacute;ritu para llenarnos y capacitarnos.</p>

<p>&ldquo;Y les dijo Jes&uacute;s: Venid en pos de m&iacute; y har&eacute; que se&aacute;is pescadores de hombres.&rdquo;</p>

<p>En el primer siglo, los cristianos dirigidos y capacitados por el Esp&iacute;ritu Santo y llenos de Su amor, revolucionaron el mundo de esa &eacute;poca.</p>

<p>Conforme los disc&iacute;pulos fueron llenos del Esp&iacute;ritu Santo, recibieron un poder divino y sobrenatural que los cambi&oacute;, transform&aacute;ndolos de hombres temerosos en testigos radiantes de Cristo. Ellos fueron usados por Dios para cambiar el curso de la historia.</p>

<p>Este mismo poder omnipotente, el poder del Esp&iacute;ritu Santo; est&aacute; disponible para capacitarlo a usted para vivir una vida santa y fruct&iacute;fera para Jesucristo.</p>

<p>Sin embargo, muchos cristianos tr&aacute;gicamente ni siquiera saben qui&eacute;n es el Esp&iacute;ritu Santo, o si lo saben, no conocen c&oacute;mo apropiarse de Su poder. Consecuentemente, pasan por la vida sin experimentar ni siquiera la vida abundante y fruct&iacute;fera que Cristo prometi&oacute; a todos los que conf&iacute;an en &Eacute;l.</p>

<p>Cada vez viene a mi mente el gran contraste entre la iglesia actual de Cristo y Su iglesia del primer siglo. En su introducci&oacute;n a &ldquo;Cartas a las Iglesias J&oacute;venes&rdquo;, J. B. Phillips escribe:</p>

<div class="quote-left">La gran diferencia existente entre el Cristianismo de nuestro d&iacute;a y del que leemos en esas cartas, (Las Ep&iacute;stolas del Nuevo Testamento), es que para nosotros el cristianismo es primordialmente una actuaci&oacute;n; para ellos fue una experiencia real. Nosotros con gran facilidad reducimos el cristianismo a una religi&oacute;n, a un c&oacute;digo &eacute;tico o en el mejor de los casos, a una norma para el coraz&oacute;n y para la vida. Para aquellos hombres era la total y absoluta invasi&oacute;n de sus vidas por una nueva calidad de vida.</div>

<p>Ellos no vacilaron en describirlo como Cristo mismo viviendo en ellos.</p>

<p>Este mismo poder del primer siglo - el poder del Cristo vivo y resucitado, lleno de amor, revelado por medio del Esp&iacute;ritu Santo - todav&iacute;a est&aacute; disponible para usted ahora.</p>

<p>&iquest;Ha experimentado usted este poder en su vida? &iquest;Es usted un testigo victorioso y fruct&iacute;fero para Cristo? Si no lo es, puede serlo.</p>

<p>Yo creo que el mensaje m&aacute;s importante que posiblemente puedo dar a los cristianos, son estas noticias maravillosas y revolucionarias sobre la vida llena del Esp&iacute;ritu. He compartido estas verdades alrededor del mundo con millones de cristianos; con adultos y j&oacute;venes por igual. Ning&uacute;n otro mensaje que haya presentado ha sido tan usado por Dios para transformar las vidas de las multitudes, como &eacute;ste.</p>

<p>Si usted todav&iacute;a no ha experimentado la vida abundante que Jes&uacute;s prometi&oacute; y que es su herencia leg&iacute;tima como cristiano, si usted todav&iacute;a no ha hablado a otros de Cristo como una manera de vivir y si sinceramente desea hacerlo, &iexcl;tengo muy buenas noticias para usted!</p>

<p>Las respuestas de las siguientes preguntas, pueden cambiar su vida y le permitir&aacute;n experimentar la vida abundante y fruct&iacute;fera, que nuestro Se&ntilde;or prometi&oacute; a todos los que conf&iacute;an en &Eacute;l y le obedecen.</p>

<p>Primero, &iquest;qui&eacute;n es el Esp&iacute;ritu Santo?</p>

<p>Segundo, &iquest;por qu&eacute; vino?</p>

<p>Tercero, &iquest;qu&eacute; significa ser lleno del Esp&iacute;ritu Santo?</p>

<p>Cuarto, &iquest;por qu&eacute; el cristiano com&uacute;n no est&aacute; lleno del Esp&iacute;ritu Santo? Quinto, &iquest;c&oacute;mo puede usted ser lleno del Esp&iacute;ritu Santo?</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2>+ &iquest;QUI&Eacute;N ES EL ESP&Iacute;RITU SANTO?</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p>El Esp&iacute;ritu Santo es Dios. &Eacute;l no es una &ldquo;cosa&rdquo;. No es una influencia divina. No es una nube blanca como el algod&oacute;n. &Eacute;ll no es un fantasma ni un concepto. &Eacute;l es una persona con voluntad, intelecto y emociones. &Eacute;l es Dios - con todos los atributos de la Deidad. &Eacute;l es la tercera persona de la Trinidad - &ldquo;co-igual&rdquo; con Dios, el Padre y Dios el Hijo.</p>

<p>Hay un solo Dios pero manifestado en tres personas, a las que llamamos Trinidad.</p>

<p>No puedo definir la Trinidad. Nadie puede. El Dr. Wilbur Smith, uno de mis profesores en el seminario, comparti&oacute; una vez en la clase, &ldquo;El hombre que niega la Trinidad pierde su alma. El hombre que trata de comprender la Trinidad pierde el juicio.&rdquo; Como seres finitos, no podemos comprender a Dios que es infinito.</p>

<p>Intentamos ilustrar el concepto de la Trinidad, pero tal esfuerzo es totalmente inadecuado. Por ejemplo, yo puedo decir que un hombre posee un cuerpo, una mente y un esp&iacute;ritu - &iquest;cu&aacute;l es el hombre? O podr&iacute;a describir el agua (H2O) como un l&iacute;quido, como un s&oacute;lido o un vapor, porque dependiendo del clima es agua, hielo o gas. &iquest;Cu&aacute;l es H2O? O un esposo, un padre y un hijo - que sin embargo, es el mismo hombre. Ninguna ilustraci&oacute;n es adecuada. En el mejor de los casos, s&oacute;lo puede sugerir muy levemente a qu&eacute; se parece Dios.</p>

<p>Aunque a usted y a m&iacute; nos gustar&iacute;a saberlo todo acerca de la Trinidad, algunas de nuestras preguntas s&oacute;lo obtendr&aacute;n respuestas cuando estemos con nuestro Se&ntilde;or en la eternidad. Entonces, comprenderemos completamente. Mientras tanto, consideremos lo que Pablo dice en Romanos 11:</p>

<div class="quote-left">&iexcl;Oh profundidad de las riquezas de la sabidur&iacute;a y de la ciencia de Dios!<br />
<br />
&iexcl;Cu&aacute;n insondables son sus juicios, e inescrutables sus caminos!<br />
<br />
Porque &iquest;qui&eacute;n entendi&oacute; la mente del Se&ntilde;or? &iquest;O qui&eacute;n fue su consejero?<br />
<br />
&iquest;O qui&eacute;n le di&oacute; a &eacute;l primero, para que le fuese recompensado? Porque de &eacute;l, y por &eacute;l, y para &eacute;l, son todas las cosas. A &eacute;l sea la gloria por los siglos de los siglos</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2>+ &iquest;Por qu&eacute; envi&oacute; Dios al Esp&iacute;ritu Santo?</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p>El Esp&iacute;ritu Santo vino a glorificar a Cristo y guiar a los creyentes a toda verdad. En la v&iacute;spera de su crucifixi&oacute;n, mientras estaba todav&iacute;a en el Aposento Alto, el Se&ntilde;or Jes&uacute;s les dijo a sus disc&iacute;pulos, &ldquo;Mas el Consolador, el Esp&iacute;ritu Santo, a quien el Padre enviar&aacute; en mi nombre, &Eacute;l os ense&ntilde;ar&aacute; todas las cosas y os recordar&aacute; todo lo que os he dicho.&rdquo;</p>

<p>El Esp&iacute;ritu Santo vino para que usted conozca a Cristo a trav&eacute;s de un nuevo nacimiento y para darle el poder para vivir y compartir la vida abundante que Jes&uacute;s prometi&oacute; a todos los que conf&iacute;an en &Eacute;l y le obedecen.</p>

<p>El Esp&iacute;ritu Santo inspir&oacute; a hombres santos de la antig&uuml;edad a escribir la Biblia. Conforme usted la lee, &Eacute;l le revela Su verdad. A menudo leo pasajes de las Sagradas Escrituras que he le&iacute;do muchas veces antes y repentinamente en el momento que necesito una verdad en particular, un pasaje espec&iacute;fico como que cobra vida para m&iacute;.</p>

<p>&iquest;Por qu&eacute;? Porque el Esp&iacute;ritu Santo hace relevante y significativa la Palabra de Dios, cuando yo lo necesito. La Biblia es un libro vivo inspirado por el Esp&iacute;ritu Santo, y s&oacute;lo los cristianos que son llenos de ese Esp&iacute;ritu pueden entender el significado verdadero de la Palabra de Dios.</p>

<p>Cuando hago oraci&oacute;n - excepto en el caso de la oraci&oacute;n de confesi&oacute;n - no puedo esperar que Dios me conteste, a menos que yo est&eacute; caminando en el Esp&iacute;ritu. Puedo testificar de Cristo, pero nadie responder&aacute;, a menos que yo est&eacute; controlado y capacitado por el Esp&iacute;ritu Santo.</p>

<p>No puedo vivir una vida santa, sin la ayuda del Esp&iacute;ritu porque &ldquo;el fruto del Esp&iacute;ritu es amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza.&rdquo;</p>

<p>Un ministro cristiano, amigo m&iacute;o, me dijo, &ldquo;No me gusta que se hable tanto del Esp&iacute;ritu Santo. Yo quiero hablar acerca de Cristo.&rdquo; Le record&eacute; cu&aacute;l fue la raz&oacute;n por la que vino el Esp&iacute;ritu Santo - para exaltar y glorificar a Cristo.</p>

<p>Es imposible a&uacute;n conocer a Cristo, sin el ministerio regenerador del Esp&iacute;ritu. Fue el mismo Jes&uacute;s de Nazaret quien dijo, &ldquo;El que no naciere de agua y del Esp&iacute;ritu, no puede entrar en el reino de Dios.&rdquo;</p>

<p>Es imposible que usted llegue a ser cristiano, que comprenda la Biblia y otras verdades espirituales, que ore, que viva una vida santa, que testifique o haga cualquier cosa para el Se&ntilde;or Jes&uacute;s, sin la persona del Esp&iacute;ritu Santo.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2>+ &iquest;QU&Eacute; SIGNIFICA SER LLENO DEL ESP&Iacute;RITU SANTO?</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p>Ser lleno del Esp&iacute;ritu Santo es ser lleno de Cristo mismo. El Esp&iacute;ritu Santo vino a glorificar a Cristo. Por lo tanto, si yo estoy lleno del Esp&iacute;ritu, significa que estoy permaneciendo en Cristo. Significa tambi&eacute;n, que estoy caminando en la luz como &Eacute;l est&aacute; en la luz y la sangre de Jesucristo me limpia y me mantiene limpio de todo pecado.</p>

<p>Estoy controlado por Cristo porque las palabras &ldquo;ser lleno&rdquo; significan &ldquo;ser controlado&rdquo; tambi&eacute;n. Si yo soy controlado, pero no como una m&aacute;quina sino como una persona dirigida por el Esp&iacute;ritu Santo - el Se&ntilde;or Jes&uacute;s podr&aacute; moverse con entera libertad mediante mi cuerpo, y vivir su vida resucitada en y a trav&eacute;s de m&iacute;.</p>

<p>Este hecho maravilloso de que Cristo viva en usted y exprese su amor a trav&eacute;s suyo es una de las m&aacute;s importantes verdades en la Palabra de Dios. Las normas de la vida cristiana son tan elevadas e imposibles de alcanzar, que de acuerdo a la Palabra de Dios, s&oacute;lo una persona ha podido cumplirlas. Esa persona es Jesucristo. Ahora bien, mediante su preciosa presencia morando en cada vida, &Eacute;l desea capacitarnos y capacitar a todos los que conf&iacute;an en &Eacute;l, para que puedan vivir esa misma vida sobrenatural.</p>

<address>Usted puede ser un gran predicador, un erudito b&iacute;blico, un di&aacute;cono o un consejero, puede asistir a las reuniones de la iglesia diariamente, vivir una vida limpia y moral, memorizar cientos de vers&iacute;culos de la Biblia, dirigir el coro de una iglesia, o ense&ntilde;ar en la Escuela Dominical, pero si usted no lleva fruto habl&aacute;ndole de Cristo a otros, entonces no est&aacute; lleno y controlado por el Esp&iacute;ritu Santo, conforme a la Palabra de Dios.</address>

<p>Si usted est&aacute; dispuesto a que Jesucristo viva su vida resucitada en y a trav&eacute;s suyo, podr&aacute; experimentar as&iacute; mismo el fruto espiritual, lo cual incluye el ganar almas, con tanta naturalidad como una vid saludable produce uvas en abundancia.</p>

<p>Jes&uacute;s dijo, &ldquo;En esto es glorificado mi Padre, en que llev&eacute;is mucho fruto, y se&aacute;is as&iacute; mis disc&iacute;pulos.&rdquo;</p>

<div class="block-quote">Usted puede ser un gran predicador, un erudito b&iacute;blico, un di&aacute;cono o un consejero, puede asistir a las reuniones de la iglesia diariamente, vivir una vida limpia y moral, memorizar cientos de vers&iacute;culos de la Biblia, dirigir el coro de una iglesia, o ense&ntilde;ar en la Escuela Dominical, pero si usted no lleva fruto habl&aacute;ndole de Cristo a otros, entonces no est&aacute; lleno y controlado por el Esp&iacute;ritu Santo, conforme a la Palabra de Dios.</div>

<p>Algunas personas dicen, &ldquo;Yo testifico de Cristo viviendo una vida correcta,&rdquo; pero no es suficiente vivir una vida correcta. Muchos que no son cristianos viven vidas morales, &eacute;ticas y correctas. Pero seg&uacute;n el Se&ntilde;or Jes&uacute;s, la &uacute;nica manera de mostrar que usted verdaderamente lo sigue, es produciendo fruto, el cual incluye el presentar a otros a nuestro Salvador, as&iacute; como tambi&eacute;n vivir vidas santas. Sin embargo, la &uacute;nica manera de producir fruto es a trav&eacute;s del poder del Esp&iacute;ritu Santo.</p>

<p>Hace algunos a&ntilde;os le pregunt&eacute; a uno de los m&aacute;s grandes te&oacute;logos de nuestro tiempo, decano de un seminario teol&oacute;gico famoso, si cre&iacute;a que una persona pod&iacute;a estar llena del Esp&iacute;ritu Santo sin testificar de Cristo como una manera de vivir. Su respuesta fue un rotundo &ldquo;&iexcl;No!&rdquo;.</p>

<p>&iquest;En qu&eacute; se bas&oacute; para hacer tal afirmaci&oacute;n? La respuesta es l&oacute;gica. Nuestro Salvador vino a &laquo;buscar y a salvar lo que se hab&iacute;a perdido,&raquo; y &Eacute;l ha &ldquo;escogido y ordenado&rdquo; que usted comparta las Buenas Nuevas de Su amor y perd&oacute;n con todas las personas por todas partes. No testificar de Cristo con sus labios o fallar en hablar de &Eacute;l por medio de una vida santa, es desobediencia a Su mandamiento. El cristiano desobediente no puede esperar en ninguno de estos casos que Dios controle y capacite su vida, ni puede experimentar la realidad de la presencia y bendici&oacute;n de Dios.</p>

<p>Un estudiante muy desanimado vino a m&iacute; buscando consejo, despu&eacute;s de una de mis conferencias. Por varios meses hab&iacute;a dedicado por lo menos tres horas diarias para leer su Biblia, para orar y compartir su fe con otros. Sin embargo, nunca hab&iacute;a guiado a alguien a Cristo. Luego de conversar por unos momentos, su problema se hizo evidente - &eacute;l no estaba controlado y capacitado por el Esp&iacute;ritu Santo a pesar de que quer&iacute;a estarlo.</p>

<p>Oramos juntos, y por fe &eacute;l apropi&oacute; el poder del Esp&iacute;ritu Santo en base a la autoridad de la Palabra de Dios. Su vida fue absolutamente transformada. Ese d&iacute;a tan importante, tuvo tambi&eacute;n su primera experiencia en guiar a una persona a Cristo. El d&iacute;a siguiente, condujo a otra persona a Cristo y dos d&iacute;as despu&eacute;s a otra. Desde entonces, ha presentado a nuestro Se&ntilde;or a cientos, quiz&aacute; miles de personas.</p>

<p>Cuando usted est&aacute; lleno del Esp&iacute;ritu, no solamente recibe poder sobrenatural para testificar, sino que su personalidad comienza tambi&eacute;n a cambiar. Conforme usted contin&uacute;a caminando en el control y el poder del Esp&iacute;ritu Santo, el fruto del Esp&iacute;ritu ser&aacute; cada vez m&aacute;s evidente en su vida.</p>

<p>En G&aacute;latas 5:22,23, Pablo explica que cuando el Esp&iacute;ritu Santo dirige nuestras vidas, produce en nosotros amor, gozo, paz, paciencia, benignidad, bondad, fe, mansedumbre y templanza.</p>

<p>La relaci&oacute;n del cristiano con el Esp&iacute;ritu Santo es cr&iacute;tica y progresiva: <strong>Cr&iacute;tica</strong>, porque uno aprende que la vida cristiana es una vida de fe, m&aacute;s bien que una vida de buenas obras. Es una vida independiente de los estados emocionales (&ldquo;mas el justo por la fe vivir&aacute;&rdquo;). <strong>Progresiva</strong>, porque conforme uno aprende a caminar consistentemente en el poder y control del Esp&iacute;ritu Santo, se har&aacute; evidente el fruto del Esp&iacute;ritu en su vida.</p>

<p>Aqu&iacute; es conveniente una palabra de advertencia. No busque una experiencia emocional o m&iacute;stica. No dependa de impresiones emotivas. La Palabra de Dios debe ser la base de su crecimiento espiritual. Hay un paralelo interesante entre Efesios 5.18, que insta a estar constante y continuamente dirigidos y capacitados por el Esp&iacute;ritu Santo y Colosenses 3:16, que nos insta a que &ldquo;La palabra de Cristo more en abundancia en nosotros.&rdquo;</p>

<p>El resultado final de permitir que la Palabra de Dios habite en usted y de ser lleno y controlado por el Esp&iacute;ritu Santo, ser&aacute; que usted hablar&aacute; m&aacute;s del Se&ntilde;or con Salmos e himnos de alabanza, llenando su coraz&oacute;n de m&uacute;sica para el Se&ntilde;or. Es muy importante reconocer la importancia del equilibrio entre la Palabra de Dios y el ministerio del Esp&iacute;ritu de Dios. La Palabra de Dios parecer&iacute;a incomprensible para nosotros y tendr&iacute;a muy poco significado sin la iluminaci&oacute;n del Esp&iacute;ritu Santo. A su vez, el Esp&iacute;ritu Santo estar&iacute;a imposibilitado de hablarnos claramente y de conducirnos a la verdad capaz de transformar nuestras vidas, fuera de la Palabra de Dios.</p>

<div class="block-quote">La relaci&oacute;n del cristiano con el Esp&iacute;ritu Santo es cr&iacute;tica y progresiva: Cr&iacute;tica, porque uno aprende que la vida cristiana es una vida de fe, m&aacute;s bien que una vida de buenas obras. Es una vida independiente de los estados emocionales. Progresiva, porque conforme uno aprende a caminar consistentemente en el poder y control del Esp&iacute;ritu Santo, se har&aacute; evidente el fruto del Esp&iacute;ritu en su vida.</div>

<p>Cuando el &eacute;nfasis en el ministerio del Esp&iacute;ritu Santo y la Palabra de Dios est&aacute; en equilibrio apropiado en su vida, el resultado es una vida fruct&iacute;fera y de poder en la que nuestro Salvador el Se&ntilde;or Jesucristo, es honrado y glorificado de forma maravillosa.</p>

<p>Conforme usted contin&uacute;e permitiendo que el Esp&iacute;ritu Santo lo controle y capacite, y mientras medite en la Palabra de Dios, guard&aacute;ndola en su coraz&oacute;n, su vida expresar&aacute; m&aacute;s y m&aacute;s la belleza de Cristo y el fruto del Esp&iacute;ritu que Pablo enumera en G&aacute;latas 5:22,23. Estos atributos de nuestro Se&ntilde;or Jes&uacute;s, junto con una evangelizaci&oacute;n fruct&iacute;fera, indican que el Se&ntilde;or est&aacute; viviendo realmente Su vida en y a trav&eacute;s de usted.</p>

<p>Ser lleno del Esp&iacute;ritu Santo da como resultado una vida abundante y gozosa. Jes&uacute;s de Nazaret en una oportunidad exclam&oacute; a las multitudes, &ldquo;Si alguno tiene sed, venga a m&iacute; y beba. El que cree en m&iacute;, como dice la Escritura, de su interior correr&aacute;n r&iacute;os de agua viva.&rdquo; San Juan, el evangelista a&ntilde;ade, &ldquo;Esto dijo del Esp&iacute;ritu que hab&iacute;an de recibir los que creyesen en &Eacute;l.&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ &iquest;POR QU&Eacute; EL CRISTIANO COM&Uacute;N NO EST&Aacute; LLENO DEL ESP&Iacute;RITU?</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->
<p>El cristiano t&iacute;pico contin&uacute;a viviendo en desobediencia a Dios y no est&aacute; lleno del Esp&iacute;ritu generalmente por dos razones:</p>

<ol>
	<li>Falta de conocimiento</li>
	<li>Falta de fe</li>
</ol>

<p>Desde el momento en que ocurre su nacimiento espiritual, usted tiene el poder para ir creciendo hacia la madurez en Cristo. Sin embargo, la mayor&iacute;a de las personas no comprenden c&oacute;mo vivir por fe. Viven como en una &ldquo;monta&ntilde;a rusa&rdquo; espiritual, subiendo y bajando de una experiencia emocional a otra.</p>

<p>En Romanos 7, Pablo describe la lucha del cristiano mundano y carnal, &ldquo;Porque lo que hago, no lo entiendo; pues no hago lo que quiero, sino lo que aborrezco, eso hago...&iexcl;Miserable de m&iacute;! &iquest;qui&eacute;n me librar&aacute; de este cuerpo de muerte?&rdquo;</p>

<p>En 1 Corintios 3, Pablo describe a un creyente mundano y carnal como aquel que act&uacute;a como un no creyente. Aunque el creyente mundano ha recibido a Cristo, &eacute;l le ha permitido a su naturaleza carnal reclamar el trono de su vida por medio del pecado.</p>

<p>Dios a&uacute;n es due&ntilde;o de esta persona y Cristo, todav&iacute;a est&aacute; en esa vida, pero este cristiano ha ca&iacute;do en pecado en una o m&aacute;s &aacute;reas de su vida.</p>

<p>El creyente carnal, al no estar rendido a Dios, es a menudo una persona infeliz - a&uacute;n m&aacute;s infeliz que un no cristiano. Se encuentra en un per&iacute;odo de estancamiento espiritual porque no se arrepiente ni confiesa a Dios sus pecados. Consecuentemente, Satan&aacute;s ha logrado influenciarlo y controlarlo con &eacute;xito por medio de la carne y la lujuria.</p>

<p>Pablo escribi&oacute; a los cristianos de Corinto:</p>

<div class="quote-left">De manera que yo, hermanos, no pude hablaros como a espirituales, sino como a carnales, como a ni&ntilde;os en Cristo. Os di a beber leche, y no viandas, porque a&uacute;n no erais capaces, ni sois capaces todav&iacute;a, porque a&uacute;n sois carnales; pues habiendo entre vosotros celos, contiendas y &laquo; disensiones, &iquest;No sois carnales y and&aacute;is como hombres?</div>

<p>El cristiano mundano y carnal ciertamente experimenta la convicci&oacute;n del Esp&iacute;ritu Santo y no continuar&aacute; en su pecado indefinidamente; de no ser as&iacute;, tal vez ni siquiera sea un cristiano. Fracasado y sin fruto, este tipo de cristiano depende de su propio esfuerzo para vivir la vida, en vez de hacer uso de los recursos sobrenaturales e inagotables del Esp&iacute;ritu Santo. Aferr&aacute;ndose a sus propios intereses con una mano y tocando apenas las bendiciones de Dios con la otra, esta persona fracasa una y otra vez en vivir la vida cristiana en la llenura y el poder del Esp&iacute;ritu Santo.</p>

<p>Habiendo experimentado el gozo y las bendiciones de la comuni&oacute;n con Dios, &eacute;l ha perdido ahora el contacto y no sabe c&oacute;mo restablecer esa comuni&oacute;n perdida. Sin embargo, el creyente mundano nunca podr&aacute; estar satisfecho con volver al antiguo modo de vida, y en la b&uacute;squeda de la felicidad y satisfacci&oacute;n, esta persona se ha centrado en s&iacute; misma en lugar de centrarse en Cristo.</p>

<p>Como resultado, se encuentra cada vez m&aacute;s confundido y frustrado y no sabe qu&eacute; hacer al respecto. No sabe c&oacute;mo vivir por fe - al contrario, vive s&oacute;lo por sus sentimientos. El cristiano mundano todo lo intenta por s&iacute; mismo en vez de confiar. &Eacute;l no sabe c&oacute;mo dejar de ser mundano, ni c&oacute;mo llegar a ser un cristiano espiritual. El &uacute;nico que puede ayudarle a cambiar es, por supuesto, el Esp&iacute;ritu Santo.</p>

<div class="block-quote">La vida cristiana es una vida milagrosa y sobrenatural. El cristianismo no es lo que usted hace por Dios sino lo que &Eacute;l hace por usted. Sin fe en Cristo, usted no puede llegar a ser cristiano y sin dependencia y fe en &Eacute;l a cada momento, usted no puede vivir la vida cristiana. Cuando usted est&aacute; lleno del Esp&iacute;ritu Santo, Cristo vive su vida sobrenatural en y a trav&eacute;s de usted.</div>

<p>Pero el cristiano nominal no comprende c&oacute;mo apropiarse por fe de los recursos de la resurrecci&oacute;n de Cristo. Como resultado, el creyente mundano vive en pobreza espiritual, sin conocer ni experimentar las enormes riquezas y recursos espirituales que son su herencia en Cristo.</p>

<address>La vida cristiana es una vida milagrosa y sobrenatural. El cristianismo no es lo que usted hace por Dios sino lo que &Eacute;l hace por usted. Sin fe en Cristo, usted no puede llegar a ser cristiano y sin dependencia y fe en &Eacute;l a cada momento, usted no puede vivir la vida cristiana. Cuando usted est&aacute; lleno del Esp&iacute;ritu Santo, Cristo vive su vida sobrenatural en y a trav&eacute;s de usted.</address>

<p>Una mujer escocesa de edad avanzada viv&iacute;a en su pueblo natal en las condiciones de pobreza m&aacute;s extremas. Su hijo hab&iacute;a emigrado a Estados Unidos de Am&eacute;rica hac&iacute;a unosa&ntilde;os. All&aacute;, &eacute;l se hab&iacute;a convertido en un pr&oacute;spero hombre de negocios, pero nunca se hab&iacute;a dado tiempo para volver a su pueblo y visitar a su madre.</p>

<p>Un d&iacute;a, una amiga se sent&oacute; a hablar con aquella madre ya anciana, en su casita de campo humildemente amueblada.</p>

<p>&ldquo;&iquest;Le envi&oacute; alguna vez su hijo dinero para ayudarla con sus necesidades? -le pregunt&oacute;.</p>

<p>&ldquo;No&rdquo; -dijo la mujer moviendo la cabeza tristemente-. &ldquo;Sin embargo, &iexcl;me escribe cartas muy lindas y me env&iacute;a unas fotograf&iacute;as muy interesantes!&rdquo;</p>

<p>Su interlocutora estaba sorprendida al darse cuenta de que aquel hijo era bastante rico. Pero en lugar de manifestar lo que pensaba, ella le dijo, &ldquo;&iquest;Podr&iacute;a ver las fotograf&iacute;as que le env&iacute;a?&rdquo;</p>

<p>Sac&aacute;ndolas de un caj&oacute;n, la anciana las mostr&oacute; orgullosa. Para sorpresa de la visitante, &eacute;stas no eran fotograf&iacute;as. Eran billetes bancarios norteamericanos muy valiosos que sumaban miles de d&oacute;lares. Por d&eacute;cadas, aquella mujer escocesa hab&iacute;a estado pasando necesidades y viviendo en la pobreza. &iquest;Cu&aacute;l era el problema? Ella desconoc&iacute;a el valor de esas &ldquo;fotograf&iacute;as interesantes&rdquo;. Ten&iacute;a los billetes pero realmente no los pose&iacute;a.</p>

<p>En el Oeste de Texas, hay un famoso campo de petr&oacute;leo conocido como el Yacimiento Yates. Durante la depresi&oacute;n, esta propiedad estaba en un rancho ovejero, propiedad de un hombre llamado Yates. Al trabajar en el rancho, el Sr. Yates no ganaba suficiente dinero para pagar el capital y los intereses de la hipoteca, por lo que estuvo en peligro de perder su propiedad. Con el dinero escaso para vestirse o alimentarse, su familia, al igual que muchos otros, tuvo que vivir de la beneficencia p&uacute;blica.</p>

<p>D&iacute;a tras d&iacute;a, el Sr. Yates, mientras pastoreaba a sus ovejas sobre las onduladas colinas del Oeste de Texas, seguramente se la pasaba muy preocupado acerca de c&oacute;mo iba a pagar sus deudas. Un buen d&iacute;a, un equipo de sism&oacute;logos de una compa&ntilde;&iacute;a petrolera fue a la regi&oacute;n y le dijo al Sr. Yates que hab&iacute;a la posibilidad de que hubiera petr&oacute;leo en sus tierras. Le pidieron permiso para perforar un pozo, y firm&oacute; un contrato de arrendamiento con ellos.</p>

<p>A 1,115 pies (370 mts.) se encontr&oacute; una vasta reserva de petr&oacute;leo. El primer pozo daba un rendimiento de 80,000 barriles diarios. Muchas perforaciones subsecuentes dieron m&aacute;s del doble. En efecto, treinta a&ntilde;os despu&eacute;s del descubrimiento, el gobierno examin&oacute; uno de los pozos mostrando que todav&iacute;a ten&iacute;a el potencial de aproximadamente 125,000 barriles de petr&oacute;leo al d&iacute;a.</p>

<p>&iexcl;El Sr. Yates era propietario de todo esto! El mismo d&iacute;a que compr&oacute; la tierra, recibi&oacute; tambi&eacute;n el petr&oacute;leo y los derechos sobre el mineral. Sin embargo, estaba viviendo de la caridad. &iexcl;Un multimillonario viviendo en la pobreza! &iquest;Cu&aacute;l era el problema? &Eacute;l no sab&iacute;a que el petr&oacute;leo estuviera all&iacute;. Lo ten&iacute;a, pero no lo pose&iacute;a.</p>

<div class="block-quote">Cuando usted llega a ser un hijo de Dios, por medio de la fe en Cristo, se constituye en heredero de Dios. Todos los recursos de Dios est&aacute;n disponibles para usted. Todo lo que necesita, incluyendo sabidur&iacute;a, amor, poder para ser un hombre o una mujer de Dios y un testigo fruct&iacute;fero para Cristo, est&aacute; a su disposicion.</div>

<p>No conozco mejores ilustraciones de la vida cristiana que &eacute;stas dos. Cuando usted llega a ser un hijo de Dios, por medio de la fe en Cristo, se constituye en heredero de Dios. Todos los recursos de Dios est&aacute;n disponibles para usted. Todo lo que necesita, incluyendo sabidur&iacute;a, amor, poder para ser un hombre o una mujer de Dios y un testigo fruct&iacute;fero para Cristo, est&aacute; a su disposici&oacute;n.</p>

<p>A pesar de esto, la mayor&iacute;a de los cristianos contin&uacute;an viviendo en una pobreza espiritual impuesta por ellos&nbsp;mismos, porque no saben c&oacute;mo apropiarse de aquellos recursos espirituales de Dios que ya les pertenecen. As&iacute; como la anciana escocesa, que ignoraba que las &ldquo;fotograf&iacute;as interesantes&rdquo; eran billetes muy valiosos y as&iacute; como el Sr. Yates, junto con su vasto oc&eacute;ano de petr&oacute;leo, los cristianos viven ignorando sus enormes riquezas.</p>

<p>La falta de conocimiento no es la &uacute;nica raz&oacute;n por la que los cristianos no est&aacute;n llenos del Esp&iacute;ritu. Muchos, b&aacute;sicamente no creen en la fidelidad de Dios y tienen miedo de ceder el control de sus vidas al Esp&iacute;ritu Santo, porque temen que Dios requiera lo imposible de parte de ellos, temen que &Eacute;l cambiar&aacute; sus planes, les pedir&aacute; que dejen su riqueza, los dejar&aacute; sin diversiones en la vida, los har&aacute; soportar tragedias, o algo por el estilo.</p>

<p>Un joven y sobresaliente ministro cristiano, graduado con honores en el seminario, me dijo una vez, - &ldquo;Nunca he rendido mi vida a Cristo porque siempre tuve miedo de lo que &Eacute;l har&iacute;a conmigo.&rdquo; - Entonces me cont&oacute; c&oacute;mo hace algunos a&ntilde;os, hab&iacute;a tenido la corazonada de que si compromet&iacute;a su vida con Cristo, sus padres fallecer&iacute;an en un accidente tr&aacute;gico. &Eacute;l tem&iacute;a decir &ldquo;S&iacute;&rdquo; a Dios por miedo a que sus padres perdieran la vida. Sent&iacute;a que Dios lo probar&iacute;a para determinar la vida. Sent&iacute;a que Dios lo probar&iacute;a para determinar lo genuino de su compromiso.</p>

<p>&iquest;Le parece que esto puede provenir de un Padre amoroso? &iquest;Qui&eacute;n cree usted que puso esa idea en su mente? Ciertamente que no fue Dios. Fue Satan&aacute;s quien, como a Ad&aacute;n y a Eva hace muchos siglos, le dijo, &laquo;T&uacute; no debes confiar en Dios.&raquo; Pero yo le digo, &iexcl;usted puede y debe confiar en Dios! &Eacute;l le ama y es digno de toda su confianza.</p>

<p>Suponga que su hijo le dijera: &ldquo;Papi, Mami, los amo y he decidido que de ahora en adelante har&eacute; todo lo que me pidan.&rdquo; &iquest;C&oacute;mo responder&iacute;a usted?</p>

<p>Si usted respondiera a la expresi&oacute;n de confianza de su hijo como muchos creen que Dios les responder&iacute;a cuando rindan sus vidas a &Eacute;l, usted deber&iacute;a entonces tomar a su hijo por los hombros, mirarlo a los ojos con dureza y decirle con severidad, &ldquo;He estado esperando esto. Ahora voy a hacer que te arrepientas de esta decisi&oacute;n mientras vivas. Voy a quitarte todo lo que te gusta y te har&eacute; hacer lo que detestas. &iexcl;Har&eacute; que tu vida sea lo m&aacute;s infeliz posible!&rdquo;</p>

<div class="block-quote">Dios nos ha mostrado much&iacute;simas veces que es un Dios lleno de amor. &Eacute;l es digno de su confianza. Jes&uacute;s le asegura, &ldquo;Pues si vosotros, siendo malos, sab&eacute;is dar buenas d&aacute;divas a vuestros hijos, &iquest;cu&aacute;nto m&aacute;s vuestro Padre que est&aacute; en los cielos dar&aacute; buenas cosas a los que le pidan?&rdquo;</div>

<p>Por supuesto que usted no responder&iacute;a de esa forma a la confianza de su hijo. Yo creo que en realidad usted pondr&iacute;a sus brazos alrededor de su peque&ntilde;o hijo y le dir&iacute;a: &ldquo;Te amo tambi&eacute;n y aprecio profundamente esta expresi&oacute;n de tu amor por m&iacute;. Es el mayor regalo que podr&iacute;as haberme dado.&rdquo;</p>

<p>Dios nos ha mostrado much&iacute;simas veces que es un Dios lleno de amor. &Eacute;l es digno de su confianza. Jes&uacute;s le asegura, &ldquo;Pues si vosotros, siendo malos, sab&eacute;is dar buenas d&aacute;divas a vuestros hijos, &iquest;cu&aacute;nto m&aacute;s vuestro Padre que est&aacute; en los cielos dar&aacute; buenas cosas a los que le pidan?&rdquo;</p>

<p>Muchas personas se me aproximan buscando consejo respecto de la voluntad de Dios para sus vidas. A menudo tienen miedo de lo que Dios les pedir&aacute; que hagan. Generalmente les pregunto, &ldquo;&iquest;Cree usted que Dios le ama? &iquest;Cree usted que Dios tiene un plan maravilloso para su vida? &iquest;Tiene Dios el poder de guiar y bendecir su vida si deposita su confianza en &Eacute;l?&rdquo;</p>

<p>Como norma, las respuestas siempre son afirmativas. Entonces les pregunto, &ldquo;&iquest;Est&aacute; usted dispuesto a confiar en &Eacute;l, ahora mismo, para que lo dirija y capacite para vivir una vida santa y para ser un testigo fruct&iacute;fero de Cristo? En ese momento, la mayor&iacute;a de ellos est&aacute;n listos para decirle &ldquo;S&iacute;&rdquo; a Jes&uacute;s sin vacilaci&oacute;n. Empiezan a reconocer que la duda ha sido colocada all&iacute; por el enemigo de sus almas.</p>

<p>Cuando usted le da su vida a Cristo, no debe preocuparse por lo que pasar&aacute;. Tal vez usted tenga temor de que&Eacute;l le prive de sus placeres, lo haga abandonar su negocio o profesi&oacute;n, le quite su salud, o termine alguna amistad o relaci&oacute;n amorosa. Tal vez usted tenga miedo de que Cristo lo env&iacute;e como misionero a alg&uacute;n lugar remoto del mundo donde podr&iacute;a perder la vida.</p>

<p>En efecto, &Eacute;l podr&iacute;a y puede pedirle que haga una o m&aacute;s de estas cosas, pero tambi&eacute;n puede escoger no hacerlo. Si &Eacute;l lo hace, usted se regocijar&aacute; en el privilegio, porque Dios siempre bendice a los que conf&iacute;an en &Eacute;l y le obedecen. Las personas m&aacute;s felices que he conocido no son las que tienen todo lo mejor que este mundo ofrece - o las que han alcanzado gran &eacute;xito en sus profesiones - o las que est&aacute;n en posiciones importantes de poder e influencia. Las personas m&aacute;s felices que yo he encontrado, son las que han aprendido a confiar y a obedecer a Dios sin importar las circunstancias.</p>

<p>Usted puede confiar en Dios. Si &Eacute;l le gu&iacute;a a darlo todo, a cambio le dar&aacute; muchas m&aacute;s bendiciones de las que usted podr&iacute;a recibir sin Su gracia. S&oacute;lo Dios es digno de su total confianza. Yo le invito a venir a Cristo y libremente decirle: &ldquo;Se&ntilde;or, aqu&iacute; estoy. Toma mi vida y &uacute;same para tu gloria.&rdquo;</p>

<p>Dios nos recuerda en 1 Juan 4:18, &ldquo;En el amor no hay temor, sino que el perfecto amor echa fuera el temor; porque el temor lleva en s&iacute; castigo. De donde el que teme, no ha sido perfeccionado en el amor.&rdquo;</p>

<div class="block-quote">Usted recibe a Cristo por fe. Usted vive por fe. Todo lo que recibe de Dios, desde el momento de su nacimiento espiritual hasta su muerte, es por fe. &iquest;Quiere usted ser lleno del Esp&iacute;ritu Santo? Usted puede serlo ahora mismo, por fe.</div>

<p>La Palabra de Dios y la experiencia de multitudes a trav&eacute;s de los siglos, confirman una seguridad absoluta de que usted puede confiarle a Dios su vida, su todo.</p>

<p>&iquest;C&oacute;mo puede usted ser lleno del Esp&iacute;ritu Santo?</p>

<p>Somos llenos del Esp&iacute;ritu Santo por fe. &iquest;C&oacute;mo lleg&oacute; usted a ser cristiano? Por fe. &ldquo;Porque por gracia sois salvos, por medio de la fe; y esto no de vosotros, pues es don de Dios; no por obras para que nadie se glor&iacute;e.&rdquo;</p>

<p>&ldquo;Por tanto de la manera como hab&eacute;is recibido al Se&ntilde;or Jesucristo andad en &Eacute;l.&rdquo;</p>

<p>Usted recibe a Cristo por fe. Usted vive por fe. Todo lo que recibe de Dios, desde el momento de su nacimiento espiritual hasta su muerte, es por fe. &iquest;Quiere usted ser lleno del Esp&iacute;ritu Santo? Usted puede serlo ahora mismo, por fe.</p>

<p>Usted no tiene que rogarle a Dios que lo llene con Su Esp&iacute;ritu Santo. Usted no tiene que buscar el favor de Dios ayunando, llorando, rogando o disculp&aacute;ndose. Por un tiempo, yo mismo ayun&eacute; y clam&eacute; a Dios pidi&eacute;ndo que me llene de Su Esp&iacute;ritu. Pero un d&iacute;a descubr&iacute; en la Biblia que &ldquo;el justo vivir&aacute; por la fe.&rdquo; Usted no puede ganar ni merecer la llenura del Esp&iacute;ritu de Dios. Usted la recibe por fe.</p>

<p>Perm&iacute;tame ilustrar esto. Suponga que usted quiere hacer efectivo un cheque de cien d&oacute;lares. &iquest;Ir&iacute;a usted al banco donde tiene depositados varios miles de d&oacute;lares, y colocar el cheque en el mostrador, arrodillarse y suplicar: &ldquo;&iquest;Oh, Por favor, se&ntilde;orita cajera, podr&iacute;a cambiar mi cheque?&rdquo; De ninguna manera. Esa no es la forma en que usted actuar&iacute;a. Simplemente ir&iacute;a con toda confianza, colocar&iacute;a el cheque en el mostrador y esperar&iacute;a a que le entreguen el dinero que ya es suyo. Luego, agradecer&iacute;a a la cajera y seguir&iacute;a su camino.</p>

<p>Millones de cristianos est&aacute;n suplic&aacute;ndole a Dios como yo mismo lo hice, por algo que ya est&aacute; disponible, s&oacute;lo esperando a que lo apropien por fe. Lo que pasa es que est&aacute;n buscando alguna clase de experiencia emocional y no se dan cuenta que tal actitud es un insulto a Dios, es negar la fe. Porque la fe es el &uacute;nico camino para agradar a Dios.</p>

<p>Aunque usted es lleno del Esp&iacute;ritu Santo por fe y s&oacute;lo por fe, es importante reconocer que algunos factores contribuyen a preparar su coraz&oacute;n para experimentar la llenura del Esp&iacute;ritu.</p>

<p><strong>PRIMERO</strong>, usted debe desear vivir una vida que agrade al Se&ntilde;or.</p>

<p>Recuerde la promesa de nuestro Salvador: &ldquo;Bienaventurados los que tienen hambre y sed de justicia, porque ellos ser&aacute;n saciados.&rdquo;</p>

<p><strong>SEGUNDO</strong>, estar dispuesto a rendir su vida total e irrevocablemente a nuestro Se&ntilde;or Jesucristo. Pablo advierte en Romanos 12:1,2: &ldquo;As&iacute; que, hermanos, os ruego por las misericordias de Dios, que present&eacute;is vuestros cuerpos en sacrificio vivo, santo, agradable a Dios, que es vuestro culto racional. No os conform&eacute;is a este siglo, sino transformaos por medio de la renovaci&oacute;n de vuestro entendimiento, para que comprob&eacute;is cu&aacute;l sea la buena voluntad de Dios, agradable y perfecta.&rdquo;</p>

<p><strong>TERCERO</strong>, confiese todo pecado conocido que el Esp&iacute;ritu Santo le haga recordar y experimente la limpieza y perd&oacute;n que Dios promete en 1 Juan 1:9: &ldquo;Si confesamos nuestros pecados, Dios es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad.&rdquo;</p>

<p>Yo llamo a este proceso &ldquo;<em>La Respiraci&oacute;n Espiritual</em>.&rdquo; As&iacute; como usted exhala e inhala f&iacute;sicamente, as&iacute; tambi&eacute;n debe respirar espiritualmente. Usted exhala espiritualmente cuando confiesa sus pecados.</p>

<p>Si usted ha actuado mal hacia un hermano o ha tomado algo que no es suyo, el Esp&iacute;ritu Santo lo guiar&aacute; a hacer la restituci&oacute;n necesaria y as&iacute; corregir su error.</p>

<p>Obed&eacute;zcale, o usted perder&aacute; su bendici&oacute;n. Las bendiciones de la vida llena del Esp&iacute;ritu Santo vienen s&oacute;lo a los que est&aacute;n dispuestos a obedecerle.</p>

<p>Jes&uacute;s prometi&oacute;: &ldquo;El que tiene mis mandamientos y los guarda, &eacute;se es el que me ama; y el que me ama ser&aacute; amado por mi Padre, y yo lo amar&eacute;, y me manifestar&eacute; a &eacute;l.&rdquo;</p>

<p>Recuerde que usted no es lleno del Esp&iacute;ritu Santo porque lo desee, ni porque confiese sus pecados, ni porque presente su cuerpo en sacrificio vivo - usted recibe la llenura por fe.</p>

<div class="block-quote">Si usted es cristiano, el Esp&iacute;ritu Santo ya est&aacute; morando en usted.</div>

<p>Hay dos palabras importantes que debe recordar.</p>

<p>La primera es &lsquo;<strong>mandato</strong>&rsquo;. En Efesios 5:18, Dios le manda ser lleno: &ldquo;No os embriagu&eacute;is con vino, en lo cual hay disoluci&oacute;n; antes bien sed llenos del Esp&iacute;ritu.&rdquo; No ser lleno, controlado y dirigido por el Esp&iacute;ritu Santo es, por lo tanto, desobediencia.</p>

<p>La otra palabra es &lsquo;<strong>promesa</strong>&rsquo; - una promesa que hace posible el mandato: &ldquo;Y &eacute;sta es la confianza que tenemos en &Eacute;l, que si pedimos alguna cosa conforme a Su voluntad, &Eacute;l nos oye. Y si sabemos que &Eacute;l nos oye en cualquiera cosa que pidamos, sabemos que tenemos las peticiones que le hayamos hecho.&rdquo;</p>

<p>Ahora bien, &iquest;es la voluntad de Dios para usted que sea lleno y controlado por &Eacute;l? Por supuesto que s&iacute;, &iexcl;porque es Su mandato! Siendo as&iacute;, usted puede pedirle a Dios ahora mismo que lo llene, no porque usted lo merezca, sino bas&aacute;ndose en Su promesa.</p>

<p>Si usted es cristiano, el Esp&iacute;ritu Santo ya est&aacute; morando en usted. Por ejemplo, al adquirir un aparato mec&aacute;nico que funciona con bater&iacute;as, frecuentemente hallamos impresas en la caja las palabras &ldquo;No se incluyen las bater&iacute;as&rdquo;. El Esp&iacute;ritu Santo, su fuente de poder para la vida - ya est&aacute; &ldquo;incluido&rdquo;, cuando usted recibe a Cristo como su Salvador y Se&ntilde;or. Por eso, usted no necesita invitarlo a entrar de nuevo a su vida. &Eacute;l ya lo hizo cuando usted se hizo cristiano y Jes&uacute;s le ha prometido que &Eacute;l nunca lo dejar&aacute;.</p>

<p>En el momento en que usted recibi&oacute; a Cristo, el Esp&iacute;ritu Santo no solamente vino a morar en usted, sino que le imparti&oacute; su misma vida espiritual, haci&eacute;ndole nacer como un hijo de Dios. El Esp&iacute;ritu Santo tambi&eacute;n lo ha bautizado o identificado en el cuerpo de Cristo. En 1 Corintios 12:13, Pablo explica: &ldquo;Porque por un solo Esp&iacute;ritu fuimos todos bautizados en un cuerpo.&rdquo;</p>

<p>Es en una sola ocasi&oacute;n que el Esp&iacute;ritu Santo entra a morar en la persona, produce el nuevo nacimiento, y el bautismo del Esp&iacute;ritu Santo - todo lo cual, ocurre cuando usted recibe a Cristo.</p>

<div class="block-quote">Yo no puedo controlarme por m&iacute; mismo y a la vez, ser controlado por el Esp&iacute;ritu Santo. Cristo no puede estar en control, si yo estoy en el trono. Por lo tanto, yo debo abdicar. Esto involucra fe. Como una expresi&oacute;n de mi voluntad, en oraci&oacute;n, yo le rindo el trono de mi vida a &Eacute;l, y por fe me apropio de Sus recursos para vivir una vida santa y fruct&iacute;fera.</div>

<p>Sin embargo, ser lleno del Esp&iacute;ritu Santo no es una experiencia de s&oacute;lo una vez y para siempre. El Esp&iacute;ritu Santo puede llenarle en varias ocasiones, como se hace evidente en Efesios 5:18. En el idioma griego, en el que este mandato fue escrito originalmente, el significado es m&aacute;s claro que en la mayor&iacute;a de las traducciones. Este mandato de Dios significa ser lleno constante y continuamente, o sea, ser controlado y dirigido por el Esp&iacute;ritu Santo como una manera de vivir.</p>

<p>Yo no puedo controlarme por m&iacute; mismo y a la vez, ser controlado por el Esp&iacute;ritu Santo. Cristo no puede estar en control, si yo estoy en el trono. Por lo tanto, yo debo abdicar. Esto involucra fe. Como una expresi&oacute;n de mi voluntad, en oraci&oacute;n, yo le rindo el trono de mi vida a &Eacute;l, y por fe me apropio de Sus recursos para vivir una vida santa y fruct&iacute;fera.</p>

<p>El mandato de Efesios 5:18 es para que todos los d&iacute;as los creyentes sean llenos, dirigidos, y fortalecidos de forma continua por el Esp&iacute;ritu Santo. Adem&aacute;s, la promesa de 1 Juan 5:14,15 para todos los creyentes dice que, cuando oramos de acuerdo a la voluntad de Dios, &Eacute;l nos oye y nos responde. Si usted clama la llenura del Esp&iacute;ritu de Dios en oraci&oacute;n, &Eacute;l oir&aacute; y le responder&aacute;. &Eacute;l lo llenar&aacute;. Esto significa que usted &ldquo;inhalar&aacute;&rdquo; espiritualmente.</p>

<p>No piense que es necesario tener una experiencia emocional o que debe pasarle algo dram&aacute;tico. &iquest;C&oacute;mo recibi&oacute; usted a Cristo? &iquest;Fue debido a alguna presi&oacute;n emocional a la que usted tuvo que enfrentarse? Es posible que sus emociones hayan estado involucradas, pero finalmente usted lleg&oacute; a ser cristiano por la fe, no por su experiencia emocional. Porque la Biblia dice: &ldquo;Por gracia sois salvos, por medio de la fe.&rdquo;</p>

<p>No se le da el Esp&iacute;ritu Santo para que usted tenga una gran experiencia emocional, sino para que usted pueda vivir una vida santa y ser un testigo fruct&iacute;fero de Jesucristo. Por lo tanto, que usted tenga o no una experiencia emocional, realmente no es lo m&aacute;s importante.</p>

<p>En ninguna parte de la Biblia se le dice a usted que ore pidiendo por la llenura del Esp&iacute;ritu Santo. Usted es lleno por fe. Sin embargo, como el objeto de su fe es Dios y su Palabra, le sugiero que como una expresi&oacute;n de su fe, haga oraci&oacute;n declarando la llenura de Su Esp&iacute;ritu, seg&uacute;n el mandato y la promesa de Dios.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc3-3.png" style="width:100%" /></p>

<p>&iquest;Ha entendido las condiciones de Dios? &iquest;Tiene usted hambre y sed de justicia?</p>

<p>&iquest;Desea usted sinceramente ser controlado y dirigido por el Esp&iacute;ritu Santo? Si es as&iacute;, yo le invito a inclinar su rostro y a repetir esta oraci&oacute;n de fe ahora mismo. Anticipe que Dios le llenar&aacute; sin necesidad de suplicar, ni rogar, s&oacute;lo diga:</p>

<div class="quote-left">Padre amado, te necesito. Tengo hambre y sed de una relaci&oacute;n m&aacute;s vital contigo. Yo admito que he estado controlando mi propia vida. Como resultado, he pecado contra ti. Gracias por perdonar mis pecados por medio de la muerte de Cristo en la cruz por m&iacute;. Hoy confieso y me arrepiento de mis pecados y rindo el control de mi vida al Se&ntilde;or Jes&uacute;s. Por fe, te invito a llenarme con Tu Esp&iacute;ritu Santo tal como me mandaste que lo hiciera. T&uacute; prometiste llenarme si lo ped&iacute;a de acuerdo a Tu voluntad. Pido esto en la autoridad del nombre de Jesucristo. Para demostrar mi fe, en este momento te agradezco por llenarme con Tu Esp&iacute;ritu Santo y por tomar el control de mi vida. Am&eacute;n.</div>

<p>Ahora, si usted hizo esta oraci&oacute;n sinceramente, tenga la seguridad de que est&aacute; lleno del Esp&iacute;ritu Santo. Usted comenzar&aacute; a experimentar un amor m&aacute;s grande por Dios.</p>

<p>Usted querr&aacute; pasar tiempo con &Eacute;l estudiando Su Palabra y en oraci&oacute;n. Usted querr&aacute; compartir su amor por Cristo con otros que no lo conocen.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h2>+ CAPACITADO PARA COMPARTIR CON OTROS</h2></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->
<p>Cristo le dijo a sus disc&iacute;pulos: &ldquo;Venid en pos de m&iacute; y os har&eacute; pescadores de hombres.&rdquo; El prop&oacute;sito principal por el que usted es lleno del Esp&iacute;ritu Santo, es para hacerlo un testigo de Cristo mediante una vida santa y mediante las palabras poderosas de su testimonio.</p>

<p>Tuve el privilegio de hablar en un seminario sobre evangelismo en Dallas, Texas. Mi tema fue sobre la importancia de ser lleno del Esp&iacute;ritu Santo para ser efectivos y fruct&iacute;feros en nuestro testimonio de Cristo.</p>

<p>Al finalizar mi conferencia, una mujer comparti&oacute; conmigo la gran preocupaci&oacute;n que sent&iacute;a por su suegro. Ella me dijo: &ldquo;Mi suegro vive con mi esposo y conmigo. He orado por &eacute;l muchos a&ntilde;os, pero a&uacute;n no es cristiano. Es de edad avanzada y tengo miedo de que muera sin Cristo. &iquest;Me ayudar&aacute; usted?&rdquo;</p>

<p>Le pregunt&eacute;: &ldquo;&iquest;Es usted una cristiana llena del Esp&iacute;ritu?&rdquo;. Ella dijo, &ldquo;S&iacute;. Esta ma&ntilde;ana cuando usted finaliz&oacute; su mensaje, yo ped&iacute; por fe la llenura del Esp&iacute;ritu de Dios.&rdquo;</p>

<p>&ldquo;&iexcl;Eso es realmente maravilloso!&rdquo; -exclam&eacute;- &ldquo;Ahora, esto es lo que yo quiero que usted haga. Vaya a su casa y prep&aacute;rele a su suegro una buena cena. Cuando &eacute;l est&eacute; comiendo, l&eacute;ale este peque&ntilde;o libro titulado &lsquo;Las Cuatro Leyes Espirituales.&rsquo; Este folleto contiene la esencia destilada del Evangelio y todo lo que una persona necesita saber para recibir a Cristo como su Salvador y Se&ntilde;or.&rdquo;</p>

<p>Ella me dijo: &laquo;&iquest;Piensa usted que realmente me oir&aacute;?&raquo;</p>

<p>&ldquo;S&iacute;&rdquo; -le dije-, &ldquo;El Esp&iacute;ritu Santo de Dios la guiar&aacute; y fortalecer&aacute;.&rdquo;</p>

<p>Esa misma tarde, ella me llam&oacute;. Estaba tan emocionada que apenas pod&iacute;a expresarse.</p>

<p>Me explic&oacute; c&oacute;mo hab&iacute;a seguido mis instrucciones y c&oacute;mo su suegro disfrut&oacute; la cena. Ella fielmente le ley&oacute; el folleto de &ldquo;Las Cuatro Leyes Espirituales.&rdquo; El suegro escuch&oacute; atentamente y cuando termin&oacute; su lectura, ella le pregunt&oacute; si le gustar&iacute;a recibir a Cristo. El suegro le contest&oacute;: &ldquo;Por supuesto, me gustar&iacute;a.&rdquo;</p>

<p>Entonces, inclinaron ambos su cabeza para orar, y &eacute;l le abri&oacute; su coraz&oacute;n a Cristo y lleg&oacute; a ser un hijo de Dios. Esta mujer, quien hab&iacute;a orado por su suegro y le hab&iacute;a testificado por a&ntilde;os, descubri&oacute; que es el Esp&iacute;ritu Santo de Dios quien hace la diferencia al testificar.</p>

<p>Recuerdo las palabras finales que nuestro Se&ntilde;or les dijo a sus disc&iacute;pulos, y por medio de ellos a usted: &ldquo;Pero recibir&eacute;is poder, cuando haya venido sobre vosotros el Esp&iacute;ritu Santo, y me ser&eacute;is testigos en Jerusal&eacute;n, en toda Judea, en Samaria, y hasta lo &uacute;ltimo de la tierra.&rdquo;</p>

<p>En mi opini&oacute;n, el mayor avivamiento espiritual que ha habido desde el Pentecost&eacute;s reci&eacute;n ha comenzado. Millones de cristianos est&aacute;n descubriendo esta gran fuente de poder que alter&oacute; el curso de la historia y trastorn&oacute; al perverso Imperio Romano. Este mismo poder, el poder del Esp&iacute;ritu Santo, est&aacute; siendo liberado en nuestra generaci&oacute;n a trav&eacute;s de las vidas de cristianos de fe y obedientes, para cambiar nuestro mundo y acelerar el cumplimiento de la Gran Comisi&oacute;n en nuestra generaci&oacute;n.</p>

<p>De acuerdo a nuestras muchas encuestas, usted puede estar seguro de que la mayor&iacute;a de sus amigos cristianos querr&aacute;n tambi&eacute;n saber c&oacute;mo pueden ser llenos del Esp&iacute;ritu Santo. Por lo mismo, me gustar&iacute;a sugerirle que, dentro de las pr&oacute;ximas veinticuatro horas, usted hable de c&oacute;mo Dios lo ha llenado del Esp&iacute;ritu Santo, por lo menos con una persona m&aacute;s. El compartir con otra persona ser&aacute; una expresi&oacute;n tangible de su decisi&oacute;n de pedir la llenura del Esp&iacute;ritu Santo por fe.</p>

<p>El compartir c&oacute;mo fue usted lleno del Esp&iacute;ritu Santo, indudablemente ser&aacute; de ayuda a otros que vendr&aacute;n a regocijarse tambi&eacute;n en la vida abundante, prometida por nuestro Se&ntilde;or por medio del Esp&iacute;ritu Santo.</p>

<p>Usted puede continuar respirando espiritualmente por el resto de su vida. Exhale confesando sus pecados en cualquier momento que se d&eacute; cuenta que est&aacute; contristando al Esp&iacute;ritu, e inhale apropi&aacute;ndose del poder del Esp&iacute;ritu Santo por fe, como un acto de su voluntad. Por medio de la respiraci&oacute;n espiritual, usted puede vivir una vida abundante, gozosa y fruct&iacute;fera para la gloria de nuestro Se&ntilde;or y Salvador.</p>

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

			<td class="social" @click="share('lesson', '¿CÓMO PUEDE  USTED SER  LLENO DEL  ESPÍRITU  SANTO?: ', '/content/M2/spa/tc/tc03.html')">
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