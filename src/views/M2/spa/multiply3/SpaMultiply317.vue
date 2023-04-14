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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply3-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>17.</h1></div>
                        <div class="chapter_title ltr"><h1>Saulo en Damasco y Jerusalén</h1></div>
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
	<li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
	</div>
	</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar a las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y aliento.</em></p>

<ul class="back">
	<li>Pida a cada persona que comparta un hecho destacado y un desaf&iacute;o que haya experimentado esta semana.</li>
	<li>Pregunta: &quot;&iquest;Qu&eacute; quieres que Jes&uacute;s haga por ti esta semana?&quot; Oren por las necesidades de los dem&aacute;s</li>
</ul>

<h2 class="back">Celebra la fidelidad</h2>

<p><em>Alentar la responsabilidad amorosa de obedecer a Jes&uacute;s</em></p>

<ul class="back">
	<li>Pregunta: &quot;&iquest;Qu&eacute; pas&oacute; cuando confiaste en Dios tus metas y tu declaraci&oacute;n: &ldquo;Yo har&eacute;&hellip;&rdquo;?</li>
</ul>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2 class="back">+ Motivaci&oacute;n y Animo</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p><em>Elija una manera de proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos al</em>:</p>

<ul>
	<li>Compartir un vers&iacute;culo B&iacute;blico que les recuerde el Coraz&oacute;n del Padre y la visi&oacute;n final.</li>
	<li>Reflexionando sobre los cambios en su vida desde que comenzaron a seguir a Cristo</li>
	<li>record&aacute;ndoles lo que Dios quiere hacer a trav&eacute;s de ellos</li>
</ul>

<p>Comparta la GRAN visi&oacute;n de &quot;Una iglesia para cada pueblo y comunidad, y el Evangelio para cada persona&quot;.</p>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<ul>
	<li class="back">P&iacute;dale al grupo que cuente la historia de la semana pasada</li>
</ul>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 9:20-31</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 9:20-31</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<p><sup class="versenum">20&nbsp;</sup>y en seguida se dedic&oacute; a predicar en las sinagogas, afirmando que Jes&uacute;s es el Hijo de Dios.<sup class="versenum">21&nbsp;</sup>Todos los que le o&iacute;an quedaban asombrados, y preguntaban: &laquo;&iquest;No es este el que en Jerusal&eacute;n persegu&iacute;a a muerte a los que invocan ese nombre? &iquest;Y no ha venido aqu&iacute; para llev&aacute;rselos presos y entregarlos a los jefes de los sacerdotes?&raquo;<sup class="versenum">22&nbsp;</sup>Pero Saulo cobraba cada vez m&aacute;s fuerza y confund&iacute;a a los jud&iacute;os que viv&iacute;an en Damasco, demostr&aacute;ndoles que Jes&uacute;s es el Mes&iacute;as.</p>

<p><sup class="versenum">23&nbsp;</sup>Despu&eacute;s de muchos d&iacute;as, los jud&iacute;os se pusieron de acuerdo para hacerlo desaparecer,<sup class="versenum">24&nbsp;</sup>pero Saulo se enter&oacute; de sus maquinaciones. D&iacute;a y noche vigilaban de cerca las puertas de la ciudad con el fin de eliminarlo.<sup class="versenum">25&nbsp;</sup>Pero sus disc&iacute;pulos se lo llevaron de noche y lo bajaron en un canasto por una abertura en la muralla.</p>

<p><sup class="versenum">26&nbsp;</sup>Cuando lleg&oacute; a Jerusal&eacute;n, trataba de juntarse con los disc&iacute;pulos, pero todos ten&iacute;an miedo de &eacute;l, porque no cre&iacute;an que de veras fuera disc&iacute;pulo.<sup class="versenum">27&nbsp;</sup>Entonces Bernab&eacute; lo tom&oacute; a su cargo y lo llev&oacute; a los ap&oacute;stoles. Saulo les describi&oacute; en detalle c&oacute;mo en el camino hab&iacute;a visto al Se&ntilde;or, el cual le hab&iacute;a hablado, y c&oacute;mo en Damasco hab&iacute;a predicado con libertad en el nombre de Jes&uacute;s.<sup class="versenum">28&nbsp;</sup>As&iacute; que se qued&oacute; con ellos, y andaba por todas partes en Jerusal&eacute;n, hablando abiertamente en el nombre del Se&ntilde;or.<sup class="versenum">29&nbsp;</sup>Conversaba y discut&iacute;a con los jud&iacute;os de habla griega, pero ellos se propon&iacute;an eliminarlo.<sup class="versenum">30&nbsp;</sup>Cuando se enteraron de ello los hermanos, se lo llevaron a Cesarea y de all&iacute; lo mandaron a Tarso.</p>

<p><sup class="versenum">31&nbsp;</sup>Mientras tanto, la iglesia disfrutaba de paz a la vez que se consolidaba en toda Judea, Galilea y Samaria, pues viv&iacute;a en el temor del Se&ntilde;or. E iba creciendo en n&uacute;mero, fortalecida por el Esp&iacute;ritu Santo.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/317.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 9:20-31&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Preguntas de Descubrimiento</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n o qu&eacute; es lo que m&aacute;s te gust&oacute;? &iquest;por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; hay de nuevo o se ha desarrollado a estas alturas de la historia?</li>
	<li>&iquest;Qu&eacute; se est&aacute; modelando acerca de una vida dependiente del Esp&iacute;ritu, haciendo disc&iacute;pulos o liderazgo?</li>
	<li>&iquest;C&oacute;mo podemos vivir de manera diferente ahora que conocemos esta historia?</li>
</ul>

<p>Preguntas adicionales que puede utilizar:</p>

<ul>
	<li>&iquest;C&oacute;mo contin&uacute;an los seguidores de Jes&uacute;s Su obra de hacer disc&iacute;pulos y plantar iglesias?</li>
	<li>&iquest;C&oacute;mo est&aacute; impactando el Evangelio en las personas y en la sociedad?</li>
	<li>&iquest;Qu&eacute; barreras u obst&aacute;culos se superaron y c&oacute;mo se superaron?</li>
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
<ul>
	<li class="nobreak-final-final">Los creyentes en Damasco fueron sorprendidos por Saulo. En lugar de arrestarlos, Saulo comenz&oacute; a predicar a Jes&uacute;s como el Hijo vivo de Dios. La educaci&oacute;n avanzada de Saulo le permiti&oacute; aplicar inmediatamente su conocimiento de las Escrituras para dar pruebas persuasivas de que Jes&uacute;s era el Mes&iacute;as prometido. Jes&uacute;s ense&ntilde;&oacute; que las personas con tal entendimiento eran capaces de sacar tesoros del Antiguo Testamento y de nuevas ense&ntilde;anzas sobre el Reino (<span class="popup-link" @click = "popUp('pop3')"> Mateo 13:52</span>).

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">52&nbsp;</sup>&mdash;Todo maestro de la ley que ha sido instruido acerca del reino de los cielos es como el due&ntilde;o de una casa, que de lo que tiene guardado saca tesoros nuevos y viejos.</p>
	<!-- end bible --></div>
	Saulo era tan poderoso en su testimonio que los jud&iacute;os no pod&iacute;an discutir con &eacute;l, por lo que trataron de matarlo en Damasco. Cuando Saulo vino a Jerusal&eacute;n, s&oacute;lo Bernab&eacute; lo acept&oacute; y lo endos&oacute; a los Ap&oacute;stoles. La vida de Saulo fue amenazada de nuevo, por lo que los disc&iacute;pulos lo enviaron a su ciudad natal de Tarso, en la provincia de Cilicia, a unos 930 km al noroeste de Jerusal&eacute;n. Esta historia incluye la segunda declaraci&oacute;n resumida que se encuentra en el libro de Hechos: la iglesia ten&iacute;a paz y creci&oacute; en n&uacute;mero a medida que viv&iacute;a de una profunda reverencia por la santidad y el poder de Dios (<span class="popup-link" @click = "popUp('pop4')"> Hechos 9:31</span>).

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">31&nbsp;</sup>Mientras tanto, la iglesia disfrutaba de paz a la vez que se consolidaba en toda Judea, Galilea y Samaria, pues viv&iacute;a en el temor del Se&ntilde;or. E iba creciendo en n&uacute;mero, fortalecida por el Esp&iacute;ritu Santo.</p>
	<!-- end bible --></div>
	</li>
</ul>

</div>

<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Practique las habilidades necesarias o temas previos para ayudar a prepararse para ministrar a los dem&aacute;s:
	<ul>
		<li>Orar, Cuidar, Compartir</li>
		<li>Evangelio</li>
		<li>Estudios B&iacute;blicos Fundamentales</li>
	</ul>
	</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica personas o lugares a los que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo comparan con a su grupo.</li>
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
	<li>Comprometa las metas de todos al Se&ntilde;or. P&iacute;dele al Se&ntilde;or que nos ayude a ser fieles y que nos use para iniciar un movimiento de hacedores de disc&iacute;pulos.</li>
</ul>

<h2>Bendici&oacute;n (opcional)</h2>

<p>&nbsp;</p>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Saulo en Damasco y Jerusalén: ', '/content/M2/spa/multiply3/multiply317.html')">
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