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
                        <div class="chapter_number ltr"><h1>46.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo apasionado</h1></div>
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
	<li class="back">Lea o vea <strong>Lucas 19:28-48</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Lucas 19:28-48</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<h3>La entrada triunfal</h3>

<p><sup class="versenum">28&nbsp;</sup>Dicho esto, Jes&uacute;s sigui&oacute; adelante, subiendo hacia Jerusal&eacute;n.<sup class="versenum">29&nbsp;</sup>Cuando se acerc&oacute; a Betfagu&eacute; y a Betania, junto al monte llamado de los Olivos, envi&oacute; a dos de sus disc&iacute;pulos con este encargo:<sup class="versenum">30&nbsp;</sup>&laquo;Vayan a la aldea que est&aacute; enfrente y, al entrar en ella, encontrar&aacute;n atado un burrito en el que nadie se ha montado. Des&aacute;tenlo y tr&aacute;iganlo ac&aacute;.<sup class="versenum">31&nbsp;</sup>Y, si alguien les pregunta: &ldquo;&iquest;Por qu&eacute; lo desatan?&rdquo;, d&iacute;ganle: &ldquo;El Se&ntilde;or lo necesita&rdquo;&raquo;.</p>

<p><sup class="versenum">32&nbsp;</sup>Fueron y lo encontraron tal como &eacute;l les hab&iacute;a dicho.<sup class="versenum">33&nbsp;</sup>Cuando estaban desatando el burrito, los due&ntilde;os les preguntaron:</p>

<p>&mdash;&iquest;Por qu&eacute; desatan el burrito?</p>

<p><sup class="versenum">34&nbsp;</sup>&mdash;El Se&ntilde;or lo necesita &mdash;contestaron.</p>

<p><sup class="versenum">35&nbsp;</sup>Se lo llevaron, pues, a Jes&uacute;s. Luego pusieron sus mantos encima del burrito y ayudaron a Jes&uacute;s a montarse.<sup class="versenum">36&nbsp;</sup>A medida que avanzaba, la gente tend&iacute;a sus mantos sobre el camino.</p>

<p><sup class="versenum">37&nbsp;</sup>Al acercarse &eacute;l a la bajada del monte de los Olivos, todos los disc&iacute;pulos se entusiasmaron y comenzaron a alabar a Dios por tantos milagros que hab&iacute;an visto. Gritaban:</p>

<p><sup class="versenum">38&nbsp;</sup>&mdash;&iexcl;Bendito el Rey que viene en el nombre del Se&ntilde;or!</p>
</div>

<p>&mdash;&iexcl;Paz en el cielo y gloria en las alturas!</p>
</div>

<p><sup class="versenum">39&nbsp;</sup>Algunos de los fariseos que estaban entre la gente le reclamaron a Jes&uacute;s:</p>

<p>&mdash;&iexcl;Maestro, reprende a tus disc&iacute;pulos!</p>

<p><sup class="versenum">40&nbsp;</sup>Pero &eacute;l respondi&oacute;:</p>

<p>&mdash;Les aseguro que, si ellos se callan, gritar&aacute;n las piedras.</p>

<h3>Jes&uacute;s en el templo</h3>

<p><sup class="versenum">41&nbsp;</sup>Cuando se acercaba a Jerusal&eacute;n, Jes&uacute;s vio la ciudad y llor&oacute; por ella.<sup class="versenum">42&nbsp;</sup>Dijo:</p>

<p>&mdash;&iexcl;C&oacute;mo quisiera que hoy supieras lo que te puede traer paz! Pero eso ahora est&aacute; oculto a tus ojos.<sup class="versenum">43&nbsp;</sup>Te sobrevendr&aacute;n d&iacute;as en que tus enemigos levantar&aacute;n un muro y te rodear&aacute;n, y te encerrar&aacute;n por todos lados.<sup class="versenum">44&nbsp;</sup>Te derribar&aacute;n a ti y a tus hijos dentro de tus murallas. No dejar&aacute;n ni una piedra sobre otra, porque no reconociste el tiempo en que Dios vino a salvarte.</p>

<p><sup class="versenum">45&nbsp;</sup>Luego entr&oacute; en el templo y comenz&oacute; a echar de all&iacute; a los que estaban vendiendo.<sup class="versenum">46&nbsp;</sup>&laquo;Escrito est&aacute; &mdash;les dijo&mdash;: &ldquo;Mi casa ser&aacute; casa de oraci&oacute;n&rdquo;; pero ustedes la han convertido en &ldquo;cueva de ladrones&rdquo;&raquo;.</p>

<p><sup class="versenum">47&nbsp;</sup>Todos los d&iacute;as ense&ntilde;aba en el templo, y los jefes de los sacerdotes, los maestros de la ley y los dirigentes del pueblo procuraban matarlo.<sup class="versenum">48&nbsp;</sup>Sin embargo, no encontraban la manera de hacerlo, porque todo el pueblo lo escuchaba con gran inter&eacute;s.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/246.mp4" type="button" class="external-movie">
         Mira Lucas 19:28-48</button>
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

<p class="up">Una profec&iacute;a dada 500 a&ntilde;os antes se cumple ante los ojos de estos j&oacute;venes l&iacute;deres. &iexcl;Un rey montado en un burro se acercar&aacute; a Jerusal&eacute;n! (Zacar&iacute;as 9:9). La gente alababa a Dios cuando Jes&uacute;s descendi&oacute; por el Monte de los Olivos en el camino hacia la ciudad de Jerusal&eacute;n. Los fariseos entendieron las implicaciones mesi&aacute;nicas de la situaci&oacute;n y le dijeron a Jes&uacute;s que dijera a sus disc&iacute;pulos que se callaran. Pero Jes&uacute;s sab&iacute;a la importancia que este testimonio jugaba en el plan del Padre. Cuando Jes&uacute;s se acerca a la ciudad, comienza a llorar. Jes&uacute;s estaba afligido porque sab&iacute;a que la mayor&iacute;a de la gente no se dio cuenta de qui&eacute;n era o el significado de este evento. Tambi&eacute;n sab&iacute;a que un d&iacute;a el juicio vendr&iacute;a sobre la ciudad debido a su incredulidad; Jerusal&eacute;n ser&iacute;a destruida por el ej&eacute;rcito romano. Una vez m&aacute;s, vemos la pasi&oacute;n de Jes&uacute;s mostrada mientras expulsa a los cambistas que hab&iacute;an regresado a sus viejas pr&aacute;cticas, aprovech&aacute;ndose de las personas que ven&iacute;an a adorar a Dios. Jes&uacute;s no s&oacute;lo mostr&oacute; pasi&oacute;n por la reputaci&oacute;n del Padre, sino compasi&oacute;n por los pobres y el extranjero.</p>

<ul>
	<li class="up">Para m&aacute;s estudio: <span class="popup-link" @click = "popUp('pop3')"> Mateo 21:1-17</span>;&nbsp;

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<div>
	<h3>La entrada triunfal</h3>

	<p><sup class="versenum">1 </sup>Cuando se acercaban a Jerusal&eacute;n y llegaron a Betfagu&eacute;, al monte de los Olivos, Jes&uacute;s envi&oacute; a dos disc&iacute;pulos<sup class="versenum">2&nbsp;</sup>con este encargo: &laquo;Vayan a la aldea que tienen enfrente, y ah&iacute; mismo encontrar&aacute;n una burra atada, y un burrito con ella. Des&aacute;tenlos y tr&aacute;iganmelos.<sup class="versenum">3&nbsp;</sup>Si alguien les dice algo, resp&oacute;ndanle que el Se&ntilde;or los necesita, pero que ya los devolver&aacute;&raquo;.</p>

	<p><sup class="versenum">4&nbsp;</sup>Esto sucedi&oacute; para que se cumpliera lo dicho por el profeta:</p>

	<p><sup class="versenum">5&nbsp;</sup>&laquo;Digan a la hija de Si&oacute;n:<br />
	&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;Mira, tu rey viene hacia ti,<br />
	humilde y montado en un burro,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;en un burrito, cr&iacute;a de una bestia de carga&rdquo;&raquo;.</p>
	</div>

	<p><sup class="versenum">6&nbsp;</sup>Los disc&iacute;pulos fueron e hicieron como les hab&iacute;a mandado Jes&uacute;s.<sup class="versenum">7&nbsp;</sup>Llevaron la burra y el burrito, y pusieron encima sus mantos, sobre los cuales se sent&oacute; Jes&uacute;s.<sup class="versenum">8&nbsp;</sup>Hab&iacute;a mucha gente que tend&iacute;a sus mantos sobre el camino; otros cortaban ramas de los &aacute;rboles y las esparc&iacute;an en el camino.<sup class="versenum">9&nbsp;</sup>Tanto la gente que iba delante de &eacute;l como la que iba detr&aacute;s gritaba:</p>

	<p>&mdash;&iexcl;Hosanna al Hijo de David!</p>
	</div>

	<p>&mdash;&iexcl;Bendito el que viene en el nombre del Se&ntilde;or!</p>
	</div>

	<p>&mdash;&iexcl;Hosanna en las alturas!</p>
	</div>

	<p><sup class="versenum">10&nbsp;</sup>Cuando Jes&uacute;s entr&oacute; en Jerusal&eacute;n, toda la ciudad se conmovi&oacute;.</p>

	<p>&mdash;&iquest;Qui&eacute;n es este? &mdash;preguntaban.</p>

	<p><sup class="versenum">11&nbsp;</sup>&mdash;Este es el profeta Jes&uacute;s, de Nazaret de Galilea &mdash;contestaba la gente.</p>

	<p><sup class="versenum">12&nbsp;</sup>Jes&uacute;s entr&oacute; en el templo y ech&oacute; de all&iacute; a todos los que compraban y vend&iacute;an. Volc&oacute; las mesas de los que cambiaban dinero y los puestos de los que vend&iacute;an palomas.<sup class="versenum">13&nbsp;</sup>&laquo;Escrito est&aacute; &mdash;les dijo&mdash;: &ldquo;Mi casa ser&aacute; llamada casa de oraci&oacute;n&rdquo;; pero ustedes la est&aacute;n convirtiendo en &ldquo;cueva de ladrones&rdquo;&raquo;.</p>

	<p><sup class="versenum">14&nbsp;</sup>Se le acercaron en el templo ciegos y cojos, y los san&oacute;.<sup class="versenum">15&nbsp;</sup>Pero cuando los jefes de los sacerdotes y los maestros de la ley vieron que hac&iacute;a cosas maravillosas, y que los ni&ntilde;os gritaban en el templo: &laquo;&iexcl;Hosanna al Hijo de David!&raquo;, se indignaron.</p>

	<p><sup class="versenum">16&nbsp;</sup>&mdash;&iquest;Oyes lo que esos est&aacute;n diciendo? &mdash;protestaron.</p>

	<p>&mdash;Claro que s&iacute; &mdash;respondi&oacute; Jes&uacute;s&mdash;; &iquest;no han le&iacute;do nunca:</p>

	<p>&raquo;&ldquo;En los labios de los peque&ntilde;os<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y de los ni&ntilde;os de pecho<br />
	&nbsp;&nbsp;&nbsp;&nbsp;has puesto la perfecta alabanza&rdquo;?&raquo;</p>
	</div>

	<p><sup class="versenum">17&nbsp;</sup>Entonces los dej&oacute; y, saliendo de la ciudad, se fue a pasar la noche en Betania.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop4')"> Marcos 11 :1-2</span>;&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>Cuando se acercaban a Jerusal&eacute;n y llegaron a Betfagu&eacute; y a Betania, junto al monte de los Olivos, Jes&uacute;s envi&oacute; a dos de sus disc&iacute;pulos<sup class="versenum">2&nbsp;</sup>con este encargo: &laquo;Vayan a la aldea que tienen enfrente. Tan pronto como entren en ella, encontrar&aacute;n atado un burrito, en el que nunca se ha montado nadie. Des&aacute;tenlo y tr&aacute;iganlo ac&aacute;.</p>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop5')"> Juan 12:12-19</span>.

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<div>
	<div>
	<div>
	<div>
	<p><sup class="versenum">12&nbsp;</sup>Al d&iacute;a siguiente muchos de los que hab&iacute;an ido a la fiesta se enteraron de que Jes&uacute;s se dirig&iacute;a a Jerusal&eacute;n;<sup class="versenum">13&nbsp;</sup>tomaron ramas de palma y salieron a recibirlo, gritando a voz en cuello:</p>

	<p>&mdash;&iexcl;Hosanna!</p>
	</div>

	<p>&mdash;&iexcl;Bendito el que viene en el nombre del Se&ntilde;or!</p>
	</div>

	<p>&mdash;&iexcl;Bendito el Rey de Israel!</p>
	</div>

	<p><sup class="versenum">14&nbsp;</sup>Jes&uacute;s encontr&oacute; un burrito y se mont&oacute; en &eacute;l, como dice la Escritura:</p>

	<p><sup class="versenum">15&nbsp;</sup>&laquo;No temas, oh hija de Si&oacute;n;<br />
	&nbsp;&nbsp;&nbsp;&nbsp;mira, que aqu&iacute; viene tu rey,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;montado sobre un burrito&raquo;.</p>
	</div>

	<p><sup class="versenum">16&nbsp;</sup>Al principio, sus disc&iacute;pulos no entendieron lo que suced&iacute;a. Solo despu&eacute;s de que Jes&uacute;s fue glorificado se dieron cuenta de que se hab&iacute;a cumplido en &eacute;l lo que de &eacute;l ya estaba escrito.</p>

	<p><sup class="versenum">17&nbsp;</sup>La gente que hab&iacute;a estado con Jes&uacute;s cuando &eacute;l llam&oacute; a L&aacute;zaro del sepulcro y lo resucit&oacute; de entre los muertos segu&iacute;a difundiendo la noticia.<sup class="versenum">18&nbsp;</sup>Muchos que se hab&iacute;an enterado de la se&ntilde;al realizada por Jes&uacute;s sal&iacute;an a su encuentro.<sup class="versenum">19&nbsp;</sup>Por eso los fariseos comentaban entre s&iacute;: &laquo;Como pueden ver, as&iacute; no vamos a lograr nada. &iexcl;Miren c&oacute;mo lo sigue todo el mundo!&raquo;</p>
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

			<td class="social" @click="share('lesson', 'Liderazgo apasionado: ', '/content/M2/spa/multiply2/multiply246.html')">
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