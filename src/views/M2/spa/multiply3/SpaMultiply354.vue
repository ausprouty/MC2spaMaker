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
                        <div class="chapter_number ltr"><h1>54.</h1></div>
                        <div class="chapter_title ltr"><h1>Ministerio mientras estaba bajo arresto domiciliario en Roma</h1></div>
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

<p class="back">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (Filipenses 2:11b; 1 Timoteo 2:4-6a)</p>

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
	<li class="back">Lea o vea <strong>Hechos 28:11-31</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 28:11-31</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<h3>Llegada a Roma</h3>

<p><sup class="versenum">11&nbsp;</sup>Al cabo de tres meses en la isla, zarpamos en un barco que hab&iacute;a invernado all&iacute;. Era una nave de Alejandr&iacute;a que ten&iacute;a por insignia a los dioses Di&oacute;scuros.<sup class="versenum">12&nbsp;</sup>Hicimos escala en Siracusa, donde nos quedamos tres d&iacute;as.<sup class="versenum">13&nbsp;</sup>Desde all&iacute; navegamos bordeando la costa y llegamos a Regio. Al d&iacute;a siguiente se levant&oacute; el viento del sur, y al segundo d&iacute;a llegamos a Poteoli.<sup class="versenum">14&nbsp;</sup>All&iacute; encontramos a algunos creyentes que nos invitaron a pasar una semana con ellos. Y por fin llegamos a Roma.<sup class="versenum">15&nbsp;</sup>Los hermanos de Roma, habi&eacute;ndose enterado de nuestra situaci&oacute;n, salieron hasta el Foro de Apio y Tres Tabernas a recibirnos. Al verlos, Pablo dio gracias a Dios y cobr&oacute; &aacute;nimo.<sup class="versenum">16&nbsp;</sup>Cuando llegamos a Roma, a Pablo se le permiti&oacute; tener su domicilio particular, con un soldado que lo custodiara.</p>

<h3>Pablo predica bajo custodia en Roma</h3>

<p><sup class="versenum">17&nbsp;</sup>Tres d&iacute;as m&aacute;s tarde, Pablo convoc&oacute; a los dirigentes de los jud&iacute;os. Cuando estuvieron reunidos, les dijo:</p>

<p>&mdash;A m&iacute;, hermanos, a pesar de no haber hecho nada contra mi pueblo ni contra las costumbres de nuestros antepasados, me arrestaron en Jerusal&eacute;n y me entregaron a los romanos.<sup class="versenum">18&nbsp;</sup>Estos me interrogaron y quisieron soltarme por no ser yo culpable de ning&uacute;n delito que mereciera la muerte.<sup class="versenum">19&nbsp;</sup>Cuando los jud&iacute;os se opusieron, me vi obligado a apelar al emperador, pero no porque tuviera alguna acusaci&oacute;n que presentar contra mi naci&oacute;n.<sup class="versenum">20&nbsp;</sup>Por este motivo he pedido verlos y hablar con ustedes. Precisamente por la esperanza de Israel estoy encadenado.</p>

<p><sup class="versenum">21&nbsp;</sup>&mdash;Nosotros no hemos recibido ninguna carta de Judea que tenga que ver contigo &mdash;le contestaron ellos&mdash;, ni ha llegado ninguno de los hermanos de all&aacute; con malos informes o que haya hablado mal de ti.<sup class="versenum">22&nbsp;</sup>Pero queremos o&iacute;r tu punto de vista, porque lo &uacute;nico que sabemos es que en todas partes se habla en contra de esa secta.</p>

<p><sup class="versenum">23&nbsp;</sup>Se&ntilde;alaron un d&iacute;a para reunirse con Pablo, y acudieron en mayor n&uacute;mero a la casa donde estaba alojado. Desde la ma&ntilde;ana hasta la tarde estuvo explic&aacute;ndoles y testific&aacute;ndoles acerca del reino de Dios y tratando de convencerlos respecto a Jes&uacute;s, partiendo de la ley de Mois&eacute;s y de los profetas.<sup class="versenum">24&nbsp;</sup>Unos se convencieron por lo que &eacute;l dec&iacute;a, pero otros se negaron a creer.<sup class="versenum">25&nbsp;</sup>No pudieron ponerse de acuerdo entre s&iacute;, y comenzaron a irse cuando Pablo a&ntilde;adi&oacute; esta &uacute;ltima declaraci&oacute;n: &laquo;Con raz&oacute;n el Esp&iacute;ritu Santo les habl&oacute; a sus antepasados por medio del profeta Isa&iacute;as diciendo:</p>

<p><sup class="versenum">26&nbsp;</sup>&raquo;&ldquo;Ve a este pueblo y dile:<br />
&lsquo;Por mucho que oigan, no entender&aacute;n;<br />
&nbsp;&nbsp;&nbsp;&nbsp;por mucho que vean, no percibir&aacute;n&rsquo;.<br />
<sup class="versenum">27&nbsp;</sup>Porque el coraz&oacute;n de este pueblo se ha vuelto insensible;<br />
&nbsp;&nbsp;&nbsp;&nbsp;se les han embotado los o&iacute;dos,<br />
&nbsp;&nbsp;&nbsp;&nbsp;y se les han cerrado los ojos.<br />
De lo contrario, ver&iacute;an con los ojos,<br />
&nbsp;&nbsp;&nbsp;&nbsp;oir&iacute;an con los o&iacute;dos,<br />
&nbsp;&nbsp;&nbsp;&nbsp;entender&iacute;an con el coraz&oacute;n<br />
y se convertir&iacute;an, y yo los sanar&iacute;a&rdquo;.</p>
</div>

<p><sup class="versenum">28&nbsp;</sup>&raquo;Por tanto, quiero que sepan que esta salvaci&oacute;n de Dios se ha enviado a los gentiles, y ellos s&iacute; escuchar&aacute;n&raquo;.</p>

<p><sup class="versenum">30&nbsp;</sup>Durante dos a&ntilde;os completos permaneci&oacute; Pablo en la casa que ten&iacute;a alquilada, y recib&iacute;a a todos los que iban a verlo.<sup class="versenum">31&nbsp;</sup>Y predicaba el reino de Dios y ense&ntilde;aba acerca del Se&ntilde;or Jesucristo sin impedimento y sin temor alguno.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/354.mp4" type="button" class="external-movie">
         Mira Hechos 28:11-31</button>
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
<p class="up">Los creyentes romanos habr&iacute;an recibido la carta de Pablo casi 3 a&ntilde;os antes. Pablo mantuvo el patr&oacute;n de comenzar con los jud&iacute;os, d&aacute;ndoles evidencia de las Escrituras de que Jes&uacute;s es el Mes&iacute;as, y luego comenzar a compartir con el pueblo no jud&iacute;o. El testimonio del l&iacute;der jud&iacute;o da una visi&oacute;n de la difusi&oacute;n del Evangelio, &quot;sabemos que la gente en todas partes est&aacute; hablando en contra de esta secta&quot; (Hechos 28:22). Pablo fue capaz de testificar a sus guardias romanos e incluso los miembros de la casa de C&eacute;sar se convirtieron en creyentes (Filipenses 4:22). Durante su tiempo en Roma, Pablo continu&oacute; entrenando y asesorando a creyentes en Filipos, Colosas y &Eacute;feso a trav&eacute;s de la escritura de cartas.</p>

<p class="up"><em>Practique el dar y la Santa Cena aqu&iacute; o en la secci&oacute;n Preparaci&oacute;n para la Misi&oacute;n</em></p>

</div>

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

			<td class="social" @click="share('lesson', 'Ministerio mientras estaba bajo arresto domiciliario en Roma: ', '/content/M2/spa/multiply3/multiply354.html')">
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