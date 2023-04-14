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
                        <div class="chapter_number ltr"><h1>33.</h1></div>
                        <div class="chapter_title ltr"><h1>Liderazgo y fortalezas espirituales</h1></div>
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
	<li class="back">Lea o vea <strong>Marcos 5:1-20</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Marcos 5:1-20</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Liberaci&oacute;n de un endemoniado</h3>

<p><sup class="versenum">1 </sup>Cruzaron el lago hasta llegar a la regi&oacute;n de los gerasenos.<sup class="versenum">2&nbsp;</sup>Tan pronto como desembarc&oacute; Jes&uacute;s, un hombre pose&iacute;do por un esp&iacute;ritu maligno le sali&oacute; al encuentro de entre los sepulcros.<sup class="versenum">3&nbsp;</sup>Este hombre viv&iacute;a en los sepulcros, y ya nadie pod&iacute;a sujetarlo, ni siquiera con cadenas.<sup class="versenum">4&nbsp;</sup>Muchas veces lo hab&iacute;an atado con cadenas y grilletes, pero &eacute;l los destrozaba, y nadie ten&iacute;a fuerza para dominarlo.<sup class="versenum">5&nbsp;</sup>Noche y d&iacute;a andaba por los sepulcros y por las colinas, gritando y golpe&aacute;ndose con piedras.</p>

<p><sup class="versenum">6&nbsp;</sup>Cuando vio a Jes&uacute;s desde lejos, corri&oacute; y se postr&oacute; delante de &eacute;l.</p>

<p><sup class="versenum">7&nbsp;</sup>&mdash;&iquest;Por qu&eacute; te entrometes, Jes&uacute;s, Hijo del Dios Alt&iacute;simo? &mdash;grit&oacute; con fuerza&mdash;. &iexcl;Te ruego por Dios que no me atormentes!</p>

<p><sup class="versenum">8&nbsp;</sup>Es que Jes&uacute;s le hab&iacute;a dicho: &laquo;&iexcl;Sal de este hombre, esp&iacute;ritu maligno!&raquo;</p>

<p><sup class="versenum">9&nbsp;</sup>&mdash;&iquest;C&oacute;mo te llamas? &mdash;le pregunt&oacute; Jes&uacute;s.</p>

<p>&mdash;Me llamo Legi&oacute;n &mdash;respondi&oacute;&mdash;, porque somos muchos.</p>

<p><sup class="versenum">10&nbsp;</sup>Y con insistencia le suplicaba a Jes&uacute;s que no los expulsara de aquella regi&oacute;n.</p>

<p><sup class="versenum">11&nbsp;</sup>Como en una colina estaba paciendo una manada de muchos cerdos, los demonios le rogaron a Jes&uacute;s:</p>

<p><sup class="versenum">12&nbsp;</sup>&mdash;M&aacute;ndanos a los cerdos; d&eacute;janos entrar en ellos.</p>

<p><sup class="versenum">13&nbsp;</sup>As&iacute; que &eacute;l les dio permiso. Cuando los esp&iacute;ritus malignos salieron del hombre, entraron en los cerdos, que eran unos dos mil, y la manada se precipit&oacute; al lago por el despe&ntilde;adero y all&iacute; se ahog&oacute;.</p>

<p><sup class="versenum">14&nbsp;</sup>Los que cuidaban los cerdos salieron huyendo y dieron la noticia en el pueblo y por los campos, y la gente fue a ver lo que hab&iacute;a pasado.<sup class="versenum">15&nbsp;</sup>Llegaron adonde estaba Jes&uacute;s y, cuando vieron al que hab&iacute;a estado pose&iacute;do por la legi&oacute;n de demonios, sentado, vestido y en su sano juicio, tuvieron miedo.<sup class="versenum">16&nbsp;</sup>Los que hab&iacute;an presenciado estos hechos le contaron a la gente lo que hab&iacute;a sucedido con el endemoniado y con los cerdos.<sup class="versenum">17&nbsp;</sup>Entonces la gente comenz&oacute; a suplicarle a Jes&uacute;s que se fuera de la regi&oacute;n.</p>

<p><sup class="versenum">18&nbsp;</sup>Mientras sub&iacute;a Jes&uacute;s a la barca, el que hab&iacute;a estado endemoniado le rogaba que le permitiera acompa&ntilde;arlo.<sup class="versenum">19&nbsp;</sup>Jes&uacute;s no se lo permiti&oacute;, sino que le dijo:</p>

<p>&mdash;Vete a tu casa, a los de tu familia, y diles todo lo que el Se&ntilde;or ha hecho por ti y c&oacute;mo te ha tenido compasi&oacute;n.</p>

<p><sup class="versenum">20&nbsp;</sup>As&iacute; que el hombre se fue y se puso a proclamar en Dec&aacute;polis lo mucho que Jes&uacute;s hab&iacute;a hecho por &eacute;l. Y toda la gente se qued&oacute; asombrada.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply2/233.mp4" type="button" class="external-movie">
         Mira &nbsp;Marcos 5:1-20&nbsp;</button>
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
<p class="up">Jes&uacute;s lleva a sus l&iacute;deres en entrenamiento fuera de su zona de confort a la regi&oacute;n gentil de Dec&aacute;polis, al otro lado del lago. Este era otro pa&iacute;s. Esta &aacute;rea en particular es conocida por la oscuridad espiritual debido a un hombre salvaje y violento pose&iacute;do por demonios que aterroriz&oacute; la zona. Vivi&oacute; en el exilio al margen de la sociedad entre las tumbas. En este &quot;viaje misionero al extranjero&quot; Jes&uacute;s modela a su equipo de liderazgo Su coraz&oacute;n para todas las personas, Su misi&oacute;n al mundo entero, y la realidad de que nadie est&aacute; m&aacute;s all&aacute; del poder de Jes&uacute;s para salvar. Este hombre pose&iacute;do por el demonio parece ser la raz&oacute;n principal por la que el Padre llev&oacute; a Jes&uacute;s a hacer este viaje. No s&oacute;lo se transforma el hombre, sino que se convierte en una persona de paz muy improbable enviada a testificar de Jes&uacute;s a su familia y amigos. Jes&uacute;s transforma la vida de una persona que a su vez se convierte en el iniciado para compartir el Evangelio en una poblaci&oacute;n completamente nueva.</p>

<p class="up">Para mayor estudio <span class="popup-link" @click = "popUp('pop3')"> Lucas 8:26-39</span>.</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<p><sup class="versenum">26&nbsp;</sup>Navegaron hasta la regi&oacute;n de los gerasenos, que est&aacute; al otro lado del lago, frente a Galilea.<sup class="versenum">27&nbsp;</sup>Al desembarcar Jes&uacute;s, un endemoniado que ven&iacute;a del pueblo le sali&oacute; al encuentro. Hac&iacute;a mucho tiempo que este hombre no se vest&iacute;a; tampoco viv&iacute;a en una casa, sino en los sepulcros.<sup class="versenum">28&nbsp;</sup>Cuando vio a Jes&uacute;s, dio un grito y se arroj&oacute; a sus pies. Entonces exclam&oacute; con fuerza:</p>

<p>&mdash;&iquest;Por qu&eacute; te entrometes, Jes&uacute;s, Hijo del Dios Alt&iacute;simo? &iexcl;Te ruego que no me atormentes!</p>

<p><sup class="versenum">29&nbsp;</sup>Es que Jes&uacute;s le hab&iacute;a ordenado al esp&iacute;ritu maligno que saliera del hombre. Se hab&iacute;a apoderado de &eacute;l muchas veces y, aunque le sujetaban los pies y las manos con cadenas y lo manten&iacute;an bajo custodia, romp&iacute;a las cadenas y el demonio lo arrastraba a lugares solitarios.</p>

<p><sup class="versenum">30&nbsp;</sup>&mdash;&iquest;C&oacute;mo te llamas? &mdash;le pregunt&oacute; Jes&uacute;s.</p>

<p>&mdash;Legi&oacute;n &mdash;respondi&oacute;, ya que hab&iacute;an entrado en &eacute;l muchos demonios.</p>

<p><sup class="versenum">31&nbsp;</sup>Y estos le suplicaban a Jes&uacute;s que no los mandara al abismo.<sup class="versenum">32&nbsp;</sup>Como hab&iacute;a una manada grande de cerdos paciendo en la colina, le rogaron a Jes&uacute;s que los dejara entrar en ellos. As&iacute; que &eacute;l les dio permiso.<sup class="versenum">33&nbsp;</sup>Y, cuando los demonios salieron del hombre, entraron en los cerdos, y la manada se precipit&oacute; al lago por el despe&ntilde;adero y se ahog&oacute;.</p>

<p><sup class="versenum">34&nbsp;</sup>Al ver lo sucedido, los que cuidaban los cerdos huyeron y dieron la noticia en el pueblo y por los campos,<sup class="versenum">35&nbsp;</sup>y la gente sali&oacute; a ver lo que hab&iacute;a pasado. Llegaron adonde estaba Jes&uacute;s y encontraron, sentado a sus pies, al hombre de quien hab&iacute;an salido los demonios. Cuando lo vieron vestido y en su sano juicio, tuvieron miedo.<sup class="versenum">36&nbsp;</sup>Los que hab&iacute;an presenciado estas cosas le contaron a la gente c&oacute;mo el endemoniado hab&iacute;a sido sanado.<sup class="versenum">37&nbsp;</sup>Entonces toda la gente de la regi&oacute;n de los gerasenos le pidi&oacute; a Jes&uacute;s que se fuera de all&iacute;, porque les hab&iacute;a entrado mucho miedo. As&iacute; que &eacute;l subi&oacute; a la barca para irse.</p>

<p><sup class="versenum">38&nbsp;</sup>Ahora bien, el hombre de quien hab&iacute;an salido los demonios le rogaba que le permitiera acompa&ntilde;arlo, pero Jes&uacute;s lo despidi&oacute; y le dijo:</p>

<p><sup class="versenum">39&nbsp;</sup>&mdash;Vuelve a tu casa y cuenta todo lo que Dios ha hecho por ti.</p>

<p>As&iacute; que el hombre se fue y proclam&oacute; por todo el pueblo lo mucho que Jes&uacute;s hab&iacute;a hecho por &eacute;l.</p>

<p>&nbsp;</p>
<!-- end bible --></div>
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

			<td class="social" @click="share('lesson', 'Liderazgo y fortalezas espirituales: ', '/content/M2/spa/multiply2/multiply233.html')">
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