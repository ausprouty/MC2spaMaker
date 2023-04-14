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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply2-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>48.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo sumiso</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  <!-- Lesson 12: Opening Doors-->
<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-back.png" />
<div class="lesson-subtitle"><span class="back">Mirando hacia atr&aacute;s</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2 class="back">+ Alabar</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p class="back"><em>Lee un pasaje de las Escrituras y practiquen un canto de adoraci&oacute;n.</em></p>

<ul>
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp;</sup>y toda lengua confiese que Jesucristo es el Se&ntilde;or,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6</span>)</li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
<!-- end bible --></div>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s.</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunte: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tus declaraciones: Yo har&eacute;&hellip; cu&aacute;ndo&hellip;?&quot;</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y est&iacute;mulo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p class="back">Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al:</p>

<ul>
	<li class="back">Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final, o</li>
	<li class="back">reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo, o</li>
	<li class="back">record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos.</li>
</ul>

<p class="back">Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada ciudad y comunidad, y el Evangelio para cada persona&rdquo;</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada.</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Juan 14:1-31; Mateo 26:36-46</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Juan 14</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Jes&uacute;s consuela a sus disc&iacute;pulos</h3>

<p><sup class="versenum">1 </sup>&raquo;No se angustien. Conf&iacute;en en Dios, y conf&iacute;en tambi&eacute;n en m&iacute;.<sup class="versenum">2&nbsp;</sup>En el hogar de mi Padre hay muchas viviendas; si no fuera as&iacute;, ya se lo habr&iacute;a dicho a ustedes. Voy a prepararles un lugar.<sup class="versenum">3&nbsp;</sup>Y, si me voy y se lo preparo, vendr&eacute; para llev&aacute;rmelos conmigo. As&iacute; ustedes estar&aacute;n donde yo est&eacute;.<sup class="versenum">4&nbsp;</sup>Ustedes ya conocen el camino para ir adonde yo voy&raquo;.</p>

<h3>Jes&uacute;s, el camino al Padre</h3>

<p><sup class="versenum">5&nbsp;</sup>Dijo entonces Tom&aacute;s:</p>

<p>&mdash;Se&ntilde;or, no sabemos a d&oacute;nde vas, as&iacute; que &iquest;c&oacute;mo podemos conocer el camino?</p>

<p><sup class="versenum">6&nbsp;</sup>&mdash;Yo soy el camino, la verdad y la vida &mdash;le contest&oacute; Jes&uacute;s&mdash;. Nadie llega al Padre sino por m&iacute;.<sup class="versenum">7&nbsp;</sup>Si ustedes realmente me conocieran, conocer&iacute;an tambi&eacute;n a mi Padre. Y ya desde este momento lo conocen y lo han visto.</p>

<p><sup class="versenum">8&nbsp;</sup>&mdash;Se&ntilde;or &mdash;dijo Felipe&mdash;, mu&eacute;stranos al Padre y con eso nos basta.</p>

<p><sup class="versenum">9&nbsp;</sup>&mdash;&iexcl;Pero, Felipe! &iquest;Tanto tiempo llevo ya entre ustedes, y todav&iacute;a no me conoces? El que me ha visto a m&iacute; ha visto al Padre. &iquest;C&oacute;mo puedes decirme: &ldquo;Mu&eacute;stranos al Padre&rdquo;?<sup class="versenum">10&nbsp;</sup>&iquest;Acaso no crees que yo estoy en el Padre, y que el Padre est&aacute; en m&iacute;? Las palabras que yo les comunico, no las hablo como cosa m&iacute;a, sino que es el Padre, que est&aacute; en m&iacute;, el que realiza sus obras.<sup class="versenum">11&nbsp;</sup>Cr&eacute;anme cuando les digo que yo estoy en el Padre y que el Padre est&aacute; en m&iacute;; o al menos cr&eacute;anme por las obras mismas.<sup class="versenum">12&nbsp;</sup>Ciertamente les aseguro que el que cree en m&iacute; las obras que yo hago tambi&eacute;n &eacute;l las har&aacute;, y aun las har&aacute; mayores, porque yo vuelvo al Padre.<sup class="versenum">13&nbsp;</sup>Cualquier cosa que ustedes pidan en mi nombre, yo la har&eacute;; as&iacute; ser&aacute; glorificado el Padre en el Hijo.<sup class="versenum">14&nbsp;</sup>Lo que pidan en mi nombre, yo lo har&eacute;.</p>

<h3>Jes&uacute;s promete el Esp&iacute;ritu Santo</h3>

<p><sup class="versenum">15&nbsp;</sup>&raquo;Si ustedes me aman, obedecer&aacute;n mis mandamientos.<sup class="versenum">16&nbsp;</sup>Y yo le pedir&eacute; al Padre, y &eacute;l les dar&aacute; otro Consolador para que los acompa&ntilde;e siempre:<sup class="versenum">17&nbsp;</sup>el Esp&iacute;ritu de verdad, a quien el mundo no puede aceptar porque no lo ve ni lo conoce. Pero ustedes s&iacute; lo conocen, porque vive con ustedes y estar&aacute; en ustedes.<sup class="versenum">18&nbsp;</sup>No los voy a dejar hu&eacute;rfanos; volver&eacute; a ustedes.<sup class="versenum">19&nbsp;</sup>Dentro de poco el mundo ya no me ver&aacute; m&aacute;s, pero ustedes s&iacute; me ver&aacute;n. Y porque yo vivo, tambi&eacute;n ustedes vivir&aacute;n.<sup class="versenum">20&nbsp;</sup>En aquel d&iacute;a ustedes se dar&aacute;n cuenta de que yo estoy en mi Padre, y ustedes en m&iacute;, y yo en ustedes.<sup class="versenum">21&nbsp;</sup>&iquest;Qui&eacute;n es el que me ama? El que hace suyos mis mandamientos y los obedece. Y al que me ama, mi Padre lo amar&aacute;, y yo tambi&eacute;n lo amar&eacute; y me manifestar&eacute; a &eacute;l&raquo;.</p>

<p><sup class="versenum">22&nbsp;</sup>Judas (no el Iscariote) le dijo:</p>

<p>&mdash;&iquest;Por qu&eacute;, Se&ntilde;or, est&aacute;s dispuesto a manifestarte a nosotros, y no al mundo?</p>

<p><sup class="versenum">23&nbsp;</sup>Le contest&oacute; Jes&uacute;s:</p>

<p>&mdash;El que me ama, obedecer&aacute; mi palabra, y mi Padre lo amar&aacute;, y haremos nuestra morada en &eacute;l.<sup class="versenum">24&nbsp;</sup>El que no me ama, no obedece mis palabras. Pero estas palabras que ustedes oyen no son m&iacute;as, sino del Padre, que me envi&oacute;.</p>

<p><sup class="versenum">25&nbsp;</sup>&raquo;Todo esto lo digo ahora que estoy con ustedes.<sup class="versenum">26&nbsp;</sup>Pero el Consolador, el Esp&iacute;ritu Santo, a quien el Padre enviar&aacute; en mi nombre, les ense&ntilde;ar&aacute; todas las cosas y les har&aacute; recordar todo lo que les he dicho.<sup class="versenum">27&nbsp;</sup>La paz les dejo; mi paz les doy. Yo no se la doy a ustedes como la da el mundo. No se angustien ni se acobarden.</p>

<p><sup class="versenum">28&nbsp;</sup>&raquo;Ya me han o&iacute;do decirles: &ldquo;Me voy, pero vuelvo a ustedes&rdquo;. Si me amaran, se alegrar&iacute;an de que voy al Padre, porque el Padre es m&aacute;s grande que yo.<sup class="versenum">29&nbsp;</sup>Y les he dicho esto ahora, antes de que suceda, para que cuando suceda, crean.<sup class="versenum">30&nbsp;</sup>Ya no hablar&eacute; m&aacute;s con ustedes, porque viene el pr&iacute;ncipe de este mundo. &Eacute;l no tiene ning&uacute;n dominio sobre m&iacute;,<sup class="versenum">31&nbsp;</sup>pero el mundo tiene que saber que amo al Padre, y que hago exactamente lo que &eacute;l me ha ordenado que haga.</p>

<p>&raquo;&iexcl;Lev&aacute;ntense, v&aacute;monos de aqu&iacute;!</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/248.mp4" type="button" class="external-movie">
         Mira &nbsp;Juan 14:1-31&nbsp;</button>
    <div class="collapsed"></div>

<button id="Button1" type="button" class="collapsible bible">Lee Mateo 26:36-46</button><div class="collapsed" id ="Text1">
<!-- begin bible -->

<h3>Jes&uacute;s en Getseman&iacute;</h3>

<p><sup class="versenum">36&nbsp;</sup>Luego fue Jes&uacute;s con sus disc&iacute;pulos a un lugar llamado Getseman&iacute;, y les dijo: &laquo;Si&eacute;ntense aqu&iacute; mientras voy m&aacute;s all&aacute; a orar&raquo;.<sup class="versenum">37&nbsp;</sup>Se llev&oacute; a Pedro y a los dos hijos de Zebedeo, y comenz&oacute; a sentirse triste y angustiado.<sup class="versenum">38&nbsp;</sup>&laquo;Es tal la angustia que me invade, que me siento morir &mdash;les dijo&mdash;. Qu&eacute;dense aqu&iacute; y mant&eacute;nganse despiertos conmigo&raquo;.</p>

<p><sup class="versenum">39&nbsp;</sup>Yendo un poco m&aacute;s all&aacute;, se postr&oacute; sobre su rostro y or&oacute;: &laquo;Padre m&iacute;o, si es posible, no me hagas beber este trago amargo. Pero no sea lo que yo quiero, sino lo que quieres t&uacute;&raquo;.</p>

<p><sup class="versenum">40&nbsp;</sup>Luego volvi&oacute; adonde estaban sus disc&iacute;pulos y los encontr&oacute; dormidos. &laquo;&iquest;No pudieron mantenerse despiertos conmigo ni una hora? &mdash;le dijo a Pedro&mdash;.<sup class="versenum">41&nbsp;</sup>Est&eacute;n alerta y oren para que no caigan en tentaci&oacute;n. El esp&iacute;ritu est&aacute; dispuesto, pero el cuerpo es d&eacute;bil&raquo;.</p>

<p><sup class="versenum">42&nbsp;</sup>Por segunda vez se retir&oacute; y or&oacute;: &laquo;Padre m&iacute;o, si no es posible evitar que yo beba este trago amargo, h&aacute;gase tu voluntad&raquo;.</p>

<p><sup class="versenum">43&nbsp;</sup>Cuando volvi&oacute;, otra vez los encontr&oacute; dormidos, porque se les cerraban los ojos de sue&ntilde;o.<sup class="versenum">44&nbsp;</sup>As&iacute; que los dej&oacute; y se retir&oacute; a orar por tercera vez, diciendo lo mismo.</p>

<p><sup class="versenum">45&nbsp;</sup>Volvi&oacute; de nuevo a los disc&iacute;pulos y les dijo: &laquo;&iquest;Siguen durmiendo y descansando? Miren, se acerca la hora, y el Hijo del hombre va a ser entregado en manos de pecadores.<sup class="versenum">46&nbsp;</sup>&iexcl;Lev&aacute;ntense! &iexcl;V&aacute;monos! &iexcl;Ah&iacute; viene el que me traiciona!&raquo;</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/248-1.mp4" type="button" class="external-movie">
         Mira &nbsp;Mateo 26:36-46&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Discusi&oacute;n de descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;Por qu&eacute;?</li>
	<li>&iquest;Hay algo nuevo o algo que ha desarrollado hasta este punto de la historia de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendemos acerca de la humanidad o divinidad de Jes&uacute;s en este pasaje?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p><em>Preguntas adicionales que puede utilizar:</em></p>

<ul>
	<li>&iquest;Qu&eacute; est&aacute;n aprendiendo sus seguidores?</li>
	<li>&iquest;Qu&eacute; es lo que Jes&uacute;s nos est&aacute; modelando acerca de la vida, el ministerio o el liderazgo piadoso?</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note1Text')"
        id="note1Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="up">Leer, contar y corregir</h2>

<ul class="up">
	<li>Lea la historia de nuevo. P&iacute;dale a alguien que cuente la historia y p&iacute;dale al grupo que corrija si es necesario.</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h2 class="up">+ Resumen</h2></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p class="up">Jes&uacute;s ha pasado el &uacute;ltimo par de a&ntilde;os ense&ntilde;ando a la gente acerca de vivir en el Reino de Dios y c&oacute;mo es el Reino de Dios. Durante esta &uacute;ltima noche juntos, Jes&uacute;s da ense&ntilde;anzas adicionales acerca de Su partida y el don del Esp&iacute;ritu que se dar&aacute; para ayudar a Sus seguidores a vivir los caminos del Reino. Sus seguidores est&aacute;n confundidos acerca de lo que est&aacute; a punto de suceder en las pr&oacute;ximas horas, pero Jes&uacute;s aclara que &Eacute;l es Dios en la carne. Jes&uacute;s es nuestro modelo perfecto para la vida y el ministerio. Entendemos a Dios porque &Eacute;l se revela a trav&eacute;s de la vida de Jes&uacute;s. Jes&uacute;s hizo Sus obras a trav&eacute;s del Padre, y nosotros haremos la misma obra de hacer disc&iacute;pulos que Jes&uacute;s hizo por el poder de Su Esp&iacute;ritu. Jes&uacute;s tambi&eacute;n modela el liderazgo que se somete al Padre y hace Su voluntad a trav&eacute;s de Su poder. &Eacute;l les est&aacute; recordando los fundamentos de la dependencia del Esp&iacute;ritu Santo: la oraci&oacute;n; obediencia a la agenda del Reino del Padre; la prioridad de la Palabra de Dios, incluyendo las propias palabras de Jes&uacute;s; exaltar al Padre; y relaciones intencionales de amor y sacrificio.</p>
<ul>
<li class="nobreak-final-final">Para mayor estudio: <span class="popup-link" @click = "popUp('pop3')"> Lucas 22:39-46</span>;&nbsp;

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">39&nbsp;</sup>Jes&uacute;s sali&oacute; de la ciudad y, como de costumbre, se dirigi&oacute; al monte de los Olivos, y sus disc&iacute;pulos lo siguieron.<sup class="versenum">40&nbsp;</sup>Cuando llegaron al lugar, les dijo: &laquo;Oren para que no caigan en tentaci&oacute;n&raquo;.<sup class="versenum">41&nbsp;</sup>Entonces se separ&oacute; de ellos a una buena distancia, se arrodill&oacute; y empez&oacute; a orar:<sup class="versenum">42&nbsp;</sup>&laquo;Padre, si quieres, no me hagas beber este trago amargo; pero no se cumpla mi voluntad, sino la tuya&raquo;.<sup class="versenum">43&nbsp;</sup>Entonces se le apareci&oacute; un &aacute;ngel del cielo para fortalecerlo.<sup class="versenum">44&nbsp;</sup>Pero, como estaba angustiado, se puso a orar con m&aacute;s fervor, y su sudor era como gotas de sangre que ca&iacute;an a tierra.</p>

<p><sup class="versenum">45&nbsp;</sup>Cuando termin&oacute; de orar y volvi&oacute; a los disc&iacute;pulos, los encontr&oacute; dormidos, agotados por la tristeza.<sup class="versenum">46&nbsp;</sup>&laquo;&iquest;Por qu&eacute; est&aacute;n durmiendo? &mdash;les exhort&oacute;&mdash;. Lev&aacute;ntense y oren para que no caigan en tentaci&oacute;n&raquo;.</p>
<!-- end bible --></div>
<span class="popup-link" @click = "popUp('pop4')"> Marcos 14:32-42</span>.

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">32&nbsp;</sup>Fueron a un lugar llamado Getseman&iacute;, y Jes&uacute;s les dijo a sus disc&iacute;pulos: &laquo;Si&eacute;ntense aqu&iacute; mientras yo oro&raquo;.<sup class="versenum">33&nbsp;</sup>Se llev&oacute; a Pedro, a Jacobo y a Juan, y comenz&oacute; a sentir temor y tristeza.<sup class="versenum">34&nbsp;</sup>&laquo;Es tal la angustia que me invade que me siento morir &mdash;les dijo&mdash;. Qu&eacute;dense aqu&iacute; y vigilen&raquo;.</p>

<p><sup class="versenum">35&nbsp;</sup>Yendo un poco m&aacute;s all&aacute;, se postr&oacute; en tierra y empez&oacute; a orar que, de ser posible, no tuviera &eacute;l que pasar por aquella hora.<sup class="versenum">36&nbsp;</sup>Dec&iacute;a: &laquo;<em class="transliteration">Abba</em>, Padre, todo es posible para ti. No me hagas beber este trago amargo, pero no sea lo que yo quiero, sino lo que quieres t&uacute;&raquo;.</p>

<p><sup class="versenum">37&nbsp;</sup>Luego volvi&oacute; a sus disc&iacute;pulos y los encontr&oacute; dormidos. &laquo;Sim&oacute;n &mdash;le dijo a Pedro&mdash;, &iquest;est&aacute;s dormido? &iquest;No pudiste mantenerte despierto ni una hora?<sup class="versenum">38&nbsp;</sup>Vigilen y oren para que no caigan en tentaci&oacute;n. El esp&iacute;ritu est&aacute; dispuesto, pero el cuerpo es d&eacute;bil&raquo;.</p>

<p><sup class="versenum">39&nbsp;</sup>Una vez m&aacute;s se retir&oacute; e hizo la misma oraci&oacute;n.<sup class="versenum">40&nbsp;</sup>Cuando volvi&oacute;, los encontr&oacute; dormidos otra vez, porque se les cerraban los ojos de sue&ntilde;o. No sab&iacute;an qu&eacute; decirle.<sup class="versenum">41&nbsp;</sup>Al volver por tercera vez, les dijo: &laquo;&iquest;Siguen durmiendo y descansando? &iexcl;Se acab&oacute;! Ha llegado la hora. Miren, el Hijo del hombre va a ser entregado en manos de pecadores.<sup class="versenum">42&nbsp;</sup>&iexcl;Lev&aacute;ntense! &iexcl;V&aacute;monos! &iexcl;Ah&iacute; viene el que me traiciona!&raquo;</p>
<!-- end bible --></div>

<p>&nbsp;</p>

</li>
</ul>

</div>

<p><em>Practique la entrega y la comuni&oacute;n aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p class="up">Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:</p>

<ul class="forward">
	<li class="up">Orar, Cuidar, Compartir</li>
	<li class="up">Compartir el Evangelio</li>
	<li class="up">Estudios B&iacute;blicos Fundacionales</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba sus declaraciones de &ldquo;Yo har&eacute;&hellip;para cuando&hellip;&rdquo; y comp&aacute;rtala en su peque&ntilde;o grupo.</li>
</ul>

<!-- begin note capacitor-->
<div class="note-area">
    <form class="auto_submit_item">
      <textarea
        class="textarea resize-ta"
        @keyup="this.addNote('note2Text')"
        id="note2Text"
      ></textarea>
    </form>
</div>
<!-- end note capacitor -->


<h2 class="forward">Orando por la Misi&oacute;n</h2>

<ul class="forward">
	<li>Comprometa las metas de todos con el Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y &uacute;sanos para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Liderazgo sumiso: ', '/content/M2/spa/multiply2/multiply248.html')">
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