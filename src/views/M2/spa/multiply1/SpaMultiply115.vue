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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-multiply1-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>15.</h1></div>
                        <div class="chapter_title ltr"><h1>Dar con propósito</h1></div>
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
	<li class="back">Ejemplo: <span class="popup-link" @click = "popUp('pop1')"> Hebreos 4:14-16</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">14&nbsp;</sup>Por lo tanto, ya que en Jes&uacute;s, el Hijo de Dios, tenemos un gran sumo sacerdote que ha atravesado los cielos, aferr&eacute;monos a la fe que profesamos.<sup class="versenum">15&nbsp;</sup>Porque no tenemos un sumo sacerdote incapaz de compadecerse de nuestras debilidades, sino uno que ha sido tentado en todo de la misma manera que nosotros, aunque sin pecado.<sup class="versenum">16&nbsp;</sup>As&iacute; que acerqu&eacute;monos confiadamente al trono de la gracia para recibir misericordia y hallar la gracia que nos ayude en el momento que m&aacute;s la necesitemos.</p>
	<!-- end bible --></div>
	y cantar alabanzas.</li>
	<li class="back">(opcional) Use una Declaraci&oacute;n de Fe acerca de Jes&uacute;s, como <span class="popup-link" @click = "popUp('pop2')"> Filipenses 2:11b</span>;&nbsp;
	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<div>
	<p><sup class="versenum">11&nbsp;</sup>...&nbsp;para gloria de Dios Padre.</p>
	</div>
	<!-- end bible --></div>
	&nbsp;<span class="popup-link" @click = "popUp('pop3')"> 1 Timoteo 2:4-6a</span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos.&nbsp;</p>
	</div>
	</li>
</ul>

</div>

<h2 class="back">Cuidado</h2>

<p><em>Ministrar las necesidades de los dem&aacute;s en oraci&oacute;n, consejo b&iacute;blico y &aacute;nimo.</em></p>

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
<p class="back"><em>Proyectar visi&oacute;n de qui&eacute;nes pueden llegar a ser en Cristo o lo que Dios puede hacer a trav&eacute;s de ellos.</em></p>

<p class="back">Ejemplo: Un d&iacute;a Jes&uacute;s envi&oacute; a sus seguidores a ministrar a las personas en las aldeas de los alrededores. Cuando regresaron estaban tan entusiasmados con todo lo que Dios hab&iacute;a hecho a trav&eacute;s de ellos, &quot;&iexcl;Se&ntilde;or, incluso los demonios nos obedecen cuando usamos tu nombre!&quot; Despu&eacute;s de que Jes&uacute;s celebr&oacute; con ellos, Les dio esta perspectiva: &quot;Pero no os regocijes porque los malos esp&iacute;ritus os obedecen; regoc&iacute;jate porque tus nombres est&aacute;n escritos en el cielo.&quot; (<span class="popup-link" @click = "popUp('pop4')"> Lucas 10:17-20</span>)</p>

<div class="popup invisible" id="pop4"><!-- begin bible -->
<p><sup class="versenum">17&nbsp;</sup>Cuando los setenta y dos regresaron, dijeron contentos:</p>

<p>&mdash;Se&ntilde;or, hasta los demonios se nos someten en tu nombre.</p>

<p><sup class="versenum">18&nbsp;</sup>&mdash;Yo ve&iacute;a a Satan&aacute;s caer del cielo como un rayo &mdash;respondi&oacute; &eacute;l&mdash;.<sup class="versenum">19&nbsp;</sup>S&iacute;, les he dado autoridad a ustedes para pisotear serpientes y escorpiones y vencer todo el poder del enemigo; nada les podr&aacute; hacer da&ntilde;o.<sup class="versenum">20&nbsp;</sup>Sin embargo, no se alegren de que puedan someter a los esp&iacute;ritus, sino al&eacute;grense de que sus nombres est&aacute;n escritos en el cielo.</p>
<!-- end bible --></div>
&nbsp;

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-up.png" />
<div class="lesson-subtitle"><span class="up">Mirando para arriba</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h2 class="up">+ Contexto</h2></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p class="back">La iglesia primitiva estaba comprometida el uno con el otro. Se reun&iacute;an regularmente y muchas personas nuevas ven&iacute;an a Cristo. Despu&eacute;s de un tiempo de persecuci&oacute;n, oraron por valent&iacute;a y el Se&ntilde;or los ayud&oacute; a hablar el Evangelio con valent&iacute;a. Esta historia sobre los creyentes en Jerusal&eacute;n muestra su compromiso el uno con el otro</p>

</div>

<h2 class="up">Leer</h2>

<ul>
	<li class="back">Lea o vea <strong>Hechos 4:32-37</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 4:32-37</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Los creyentes comparten sus bienes</h3>

<p><sup class="versenum">32&nbsp;</sup>Todos los creyentes eran de un solo sentir y pensar. Nadie consideraba suya ninguna de sus posesiones, sino que las compart&iacute;an.<sup class="versenum">33&nbsp;</sup>Los ap&oacute;stoles, a su vez, con gran poder segu&iacute;an dando testimonio de la resurrecci&oacute;n del Se&ntilde;or Jes&uacute;s. La gracia de Dios se derramaba abundantemente sobre todos ellos,<sup class="versenum">34&nbsp;</sup>pues no hab&iacute;a ning&uacute;n necesitado en la comunidad. Quienes pose&iacute;an casas o terrenos los vend&iacute;an, llevaban el dinero de las ventas<sup class="versenum">35&nbsp;</sup>y lo entregaban a los ap&oacute;stoles para que se distribuyera a cada uno seg&uacute;n su necesidad.</p>

<p><sup class="versenum">36&nbsp;</sup>Jos&eacute;, un levita natural de Chipre, a quien los ap&oacute;stoles llamaban Bernab&eacute; (que significa: Consolador),<sup class="versenum">37&nbsp;</sup>vendi&oacute; un terreno que pose&iacute;a, llev&oacute; el dinero y lo puso a disposici&oacute;n de los ap&oacute;stoles.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply1/115.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 4:32-37&nbsp;</button>
    <div class="collapsed"></div>

<h2 class="up">Preguntas de Descubrimiento (Todos responden)</h2>

<ul class="up">
	<li>&iquest;Qu&eacute; te llam&oacute; la atenci&oacute;n (o qu&eacute; te gust&oacute; m&aacute;s) y por qu&eacute;?</li>
	<li>&iquest;Qu&eacute; aprendiste acerca de Jes&uacute;s?</li>
	<li>&iquest;Qu&eacute; aprendiste sobre las personas?</li>
	<li>&iquest;C&oacute;mo obedecer&aacute;s a Jes&uacute;s ahora que sabes esto?</li>
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
	<li class="nobreak-final-final">Incluso desde el principio de la iglesia, los creyentes se preocupaban por las necesidades de los dem&aacute;s al dar. Aprendemos de esta historia que debemos dar voluntariamente, no bajo coacci&oacute;n. Esto se afirma claramente en <span class="popup-link" @click = "popUp('pop5')"> 2 Corintios 9:7</span>.

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">7&nbsp;</sup>Cada uno debe dar seg&uacute;n lo que haya decidido en su coraz&oacute;n, no de mala gana ni por obligaci&oacute;n, porque Dios ama al que da con alegr&iacute;a.</p>
	<!-- end bible --></div>
	Lee <span class="popup-link" @click = "popUp('pop6')"> Hechos 11:27-29</span>.&nbsp;

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">27&nbsp;</sup>Por aquel tiempo unos profetas bajaron de Jerusal&eacute;n a Antioqu&iacute;a.<sup class="versenum">28&nbsp;</sup>Uno de ellos, llamado &Aacute;gabo, se puso de pie y predijo por medio del Esp&iacute;ritu que iba a haber una gran hambre en todo el mundo, lo cual sucedi&oacute; durante el reinado de Claudio.<sup class="versenum">29&nbsp;</sup>Entonces decidieron que cada uno de los disc&iacute;pulos, seg&uacute;n los recursos de cada cual, enviar&iacute;a ayuda a los hermanos que viv&iacute;an en Judea.</p>
	<!-- end bible --></div>
	La iglesia primitiva as&iacute; dio a los creyentes en otras iglesias. Esto nos muestra que nuestras donaciones pueden ser utilizadas para necesidades fuera de nuestra propia iglesia. Lee <span class="popup-link" @click = "popUp('pop7')"> Lucas 8:1-3</span>.&nbsp;

	<div class="popup invisible" id="pop7"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>Despu&eacute;s de esto, Jes&uacute;s estuvo recorriendo los pueblos y las aldeas, proclamando las buenas nuevas del reino de Dios. Lo acompa&ntilde;aban los doce,<sup class="versenum">2&nbsp;</sup>y tambi&eacute;n algunas mujeres que hab&iacute;an sido sanadas de esp&iacute;ritus malignos y de enfermedades: Mar&iacute;a, a la que llamaban Magdalena, y de la que hab&iacute;an salido siete demonios;<sup class="versenum">3&nbsp;</sup>Juana, esposa de Cuza, el administrador de Herodes; Susana y muchas m&aacute;s que los ayudaban con sus propios recursos.</p>
	<!-- end bible --></div>
	Esta historia nos muestra que dar tambi&eacute;n se usa para llevar el evangelio a otros lugares y difundir el mensaje de Dios.</li>
</ul>

</div>

<div class="lesson"><img class="lesson-icon" src="@/assets/sites/mc2/images/standard/look-forward.png" />
<div class="lesson-subtitle"><span class="forward">Mirando hacia adelante</span></div>
</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h2 class="forward">+ Preparaci&oacute;n para la Misi&oacute;n</h2></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<ul class="forward">
	<li>Conversen sobre c&oacute;mo se administrar&aacute;n las ofrendas.</li>
	<li>Identifique las necesidades en las que se puede usar las ofrendas.</li>
	<li>Recuerda el sacrificio de Jes&uacute;s a trav&eacute;s de la Santa Cena, si es necesario.</li>
	<li>Practique cualquier habilidad o tema de lecciones anteriores para ayudar a prepararse para ministrar a otros.</li>
</ul>

</div>

<h2 class="forward">Ir a la Misi&oacute;n</h2>

<ul class="forward">
	<li>Identifica a 5 personas de tu Lista Oikos con las que tomar&aacute;s la iniciativa de ministrar esta semana.</li>
	<li>Escriba declaraciones usando de &quot;Yo har&eacute;&hellip;. cuando&hellip;&rdquo; y que lo compartan con su grupo.</li>
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


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Dar con propósito: ', '/content/M2/spa/multiply1/multiply115.html')">
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