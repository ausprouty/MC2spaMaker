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
                        <div class="chapter_number ltr"><h1>8.</h1></div>
                        <div class="chapter_title ltr"><h1>Persiguiendo el Corazón de Jesús con Integridad</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 4:32-5:11</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 4:32-5:11</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Los creyentes comparten sus bienes</h3>

<p><sup class="versenum">32&nbsp;</sup>Todos los creyentes eran de un solo sentir y pensar. Nadie consideraba suya ninguna de sus posesiones, sino que las compart&iacute;an.<sup class="versenum">33&nbsp;</sup>Los ap&oacute;stoles, a su vez, con gran poder segu&iacute;an dando testimonio de la resurrecci&oacute;n del Se&ntilde;or Jes&uacute;s. La gracia de Dios se derramaba abundantemente sobre todos ellos,<sup class="versenum">34&nbsp;</sup>pues no hab&iacute;a ning&uacute;n necesitado en la comunidad. Quienes pose&iacute;an casas o terrenos los vend&iacute;an, llevaban el dinero de las ventas<sup class="versenum">35&nbsp;</sup>y lo entregaban a los ap&oacute;stoles para que se distribuyera a cada uno seg&uacute;n su necesidad.</p>

<p><sup class="versenum">36&nbsp;</sup>Jos&eacute;, un levita natural de Chipre, a quien los ap&oacute;stoles llamaban Bernab&eacute; (que significa: Consolador),<sup class="versenum">37&nbsp;</sup>vendi&oacute; un terreno que pose&iacute;a, llev&oacute; el dinero y lo puso a disposici&oacute;n de los ap&oacute;stoles.</p>

<h3>Anan&iacute;as y Safira</h3>

<p><sup class="versenum">1 </sup><sup class="versenum">1-2&nbsp;</sup>Un hombre llamado Anan&iacute;as tambi&eacute;n vendi&oacute; una propiedad y, en complicidad con su esposa Safira, se qued&oacute; con parte del dinero y puso el resto a disposici&oacute;n de los ap&oacute;stoles.</p>

<p><sup class="versenum">3&nbsp;</sup>&mdash;Anan&iacute;as &mdash;le reclam&oacute; Pedro&mdash;, &iquest;c&oacute;mo es posible que Satan&aacute;s haya llenado tu coraz&oacute;n para que le mintieras al Esp&iacute;ritu Santo y te quedaras con parte del dinero que recibiste por el terreno?<sup class="versenum">4&nbsp;</sup>&iquest;Acaso no era tuyo antes de venderlo? Y una vez vendido, &iquest;no estaba el dinero en tu poder? &iquest;C&oacute;mo se te ocurri&oacute; hacer esto? &iexcl;No has mentido a los hombres, sino a Dios!</p>

<p><sup class="versenum">5&nbsp;</sup>Al o&iacute;r estas palabras, Anan&iacute;as cay&oacute; muerto. Y un gran temor se apoder&oacute; de todos los que se enteraron de lo sucedido.<sup class="versenum">6&nbsp;</sup>Entonces se acercaron los m&aacute;s j&oacute;venes, envolvieron el cuerpo, se lo llevaron y le dieron sepultura.</p>

<p><sup class="versenum">7&nbsp;</sup>Unas tres horas m&aacute;s tarde entr&oacute; la esposa, sin saber lo que hab&iacute;a ocurrido.</p>

<p><sup class="versenum">8&nbsp;</sup>&mdash;Dime &mdash;le pregunt&oacute; Pedro&mdash;, &iquest;vendieron ustedes el terreno por tal precio?</p>

<p>&mdash;S&iacute; &mdash;dijo ella&mdash;, por tal precio.</p>

<p><sup class="versenum">9&nbsp;</sup>&mdash;&iquest;Por qu&eacute; se pusieron de acuerdo para poner a prueba al Esp&iacute;ritu del Se&ntilde;or? &mdash;le recrimin&oacute; Pedro&mdash;. &iexcl;Mira! Los que sepultaron a tu esposo acaban de regresar y ahora te llevar&aacute;n a ti.</p>

<p><sup class="versenum">10&nbsp;</sup>En ese mismo instante ella cay&oacute; muerta a los pies de Pedro. Entonces entraron los j&oacute;venes y, al verla muerta, se la llevaron y le dieron sepultura al lado de su esposo.<sup class="versenum">11&nbsp;</sup>Y un gran temor se apoder&oacute; de toda la iglesia y de todos los que se enteraron de estos sucesos.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/308.mp4" type="button" class="external-movie">
         Mira Hechos 4:32-5:11</button>
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
	<li class="nobreak-final-final">Los creyentes ten&iacute;an una comunidad amorosa. Ellos audazmente compartieron su fe e hicieron sacrificios para cuidarse unos a otros. Vemos c&oacute;mo un hombre de Chipre, Jos&eacute; llamado Bernab&eacute;, vendi&oacute; generosamente algunas tierras que pose&iacute;a para ayudar a satisfacer las necesidades de otros en la iglesia. Pero tambi&eacute;n vemos c&oacute;mo una pareja trat&oacute; de enga&ntilde;ar a la iglesia. Su motivo no era ayudar a los pobres, sino aumentar su reputaci&oacute;n de ser generosos y espirituales entre los creyentes. El Se&ntilde;or intervino y no se permiti&oacute; que la hipocres&iacute;a de Anan&iacute;as y Safira se extendiera. Aprendemos que mentirle al Esp&iacute;ritu Santo es lo mismo que mentirle a Dios, lo que hace que el Esp&iacute;ritu Santo sea igual a Dios <span class="popup-link" @click = "popUp('pop3')"> (Hechos 5:3-4</span>).


	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<p><sup class="versenum">3&nbsp;</sup>&mdash;Anan&iacute;as &mdash;le reclam&oacute; Pedro&mdash;, &iquest;c&oacute;mo es posible que Satan&aacute;s haya llenado tu coraz&oacute;n para que le mintieras al Esp&iacute;ritu Santo y te quedaras con parte del dinero que recibiste por el terreno?<sup class="versenum">4&nbsp;</sup>&iquest;Acaso no era tuyo antes de venderlo? Y una vez vendido, &iquest;no estaba el dinero en tu poder? &iquest;C&oacute;mo se te ocurri&oacute; hacer esto? &iexcl;No has mentido a los hombres, sino a Dios!</p>
	<!-- end bible --></div>
	A pesar de que tenemos el privilegio de una relaci&oacute;n personal con un Dios santo a trav&eacute;s de Jes&uacute;s, este incidente &uacute;nico del juicio de Dios record&oacute; a los creyentes que deben tener el debido respeto por el Se&ntilde;or. Al perseguir el coraz&oacute;n del Se&ntilde;or para las necesidades de los dem&aacute;s, necesitamos hacerlo con integridad.

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

			<td class="social" @click="share('lesson', 'Persiguiendo el Corazón de Jesús con Integridad: ', '/content/M2/spa/multiply3/multiply308.html')">
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