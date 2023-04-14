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
                        <div class="chapter_number ltr"><h1>24.</h1></div>
                        <div class="chapter_title ltr"><h1>Líderes liberados para la expansión de la misión</h1></div>
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

<p class="back">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:1</span>
    <div class="popup invisible" id="pop1">
<!-- begin bible -->
 <p><sup class="versenum">1 </sup>Por tanto, si sienten algún estímulo en su unión con Cristo, algún consuelo en su amor, algún compañerismo en el Espíritu, algún afecto entrañable,  </p>
<!-- end bible -->
</div>1b; <span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6</span>
    <div class="popup invisible" id="pop2">
<!-- begin bible -->
<p><sup class="versenum">4 </sup>pues él quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5 </sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6 </sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,  </p>
<!-- end bible -->
</div>a)</p>

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
	<li class="back">Lea o vea <strong>Hechos 13:1-12</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 13:1-12</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<h3>Despedida de Bernab&eacute; y Saulo</h3>

<p><sup class="versenum">1 </sup>En la iglesia de Antioqu&iacute;a eran profetas y maestros Bernab&eacute;; Sime&oacute;n, apodado el Negro; Lucio de Cirene; Mana&eacute;n, que se hab&iacute;a criado con Herodes el tetrarca; y Saulo.<sup class="versenum">2&nbsp;</sup>Mientras ayunaban y participaban en el culto al Se&ntilde;or, el Esp&iacute;ritu Santo dijo: &laquo;Ap&aacute;rtenme ahora a Bernab&eacute; y a Saulo para el trabajo al que los he llamado&raquo;.</p>

<p><sup class="versenum">3&nbsp;</sup>As&iacute; que despu&eacute;s de ayunar, orar e imponerles las manos, los despidieron.</p>

<h3>En Chipre</h3>

<p><sup class="versenum">4&nbsp;</sup>Bernab&eacute; y Saulo, enviados por el Esp&iacute;ritu Santo, bajaron a Seleucia, y de all&iacute; navegaron a Chipre.<sup class="versenum">5&nbsp;</sup>Al llegar a Salamina, predicaron la palabra de Dios en las sinagogas de los jud&iacute;os. Ten&iacute;an tambi&eacute;n a Juan como ayudante.</p>

<p><sup class="versenum">6&nbsp;</sup>Recorrieron toda la isla hasta Pafos. All&iacute; se encontraron con un hechicero, un falso profeta jud&iacute;o llamado Barjes&uacute;s,<sup class="versenum">7&nbsp;</sup>que estaba con el gobernador Sergio Paulo. El gobernador, hombre inteligente, mand&oacute; llamar a Bernab&eacute; y a Saulo, en un esfuerzo por escuchar la palabra de Dios.<sup class="versenum">8&nbsp;</sup>Pero Elimas el hechicero (que es lo que significa su nombre) se les opon&iacute;a y procuraba apartar de la fe al gobernador.<sup class="versenum">9&nbsp;</sup>Entonces Saulo, o sea Pablo, lleno del Esp&iacute;ritu Santo, clav&oacute; los ojos en Elimas y le dijo:<sup class="versenum">10&nbsp;</sup>&laquo;&iexcl;Hijo del diablo y enemigo de toda justicia, lleno de todo tipo de enga&ntilde;o y de fraude! &iquest;Nunca dejar&aacute;s de torcer los caminos rectos del Se&ntilde;or?<sup class="versenum">11&nbsp;</sup>Ahora la mano del Se&ntilde;or est&aacute; contra ti; vas a quedarte ciego y por alg&uacute;n tiempo no podr&aacute;s ver la luz del sol&raquo;.</p>

<p>Al instante cayeron sobre &eacute;l sombra y oscuridad, y comenz&oacute; a buscar a tientas a alguien que lo llevara de la mano.<sup class="versenum">12&nbsp;</sup>Al ver lo sucedido, el gobernador crey&oacute;, maravillado de la ense&ntilde;anza acerca del Se&ntilde;or.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/324.mp4" type="button" class="external-movie">
         Mira Hechos 13:1-12</button>
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
<p class="up">El equipo de liderazgo en la iglesia de Antioqu&iacute;a consist&iacute;a en cinco hombres con diferentes dones y diferentes or&iacute;genes. El Esp&iacute;ritu les orden&oacute; que enviaran a Saulo y Bernab&eacute;, dos miembros del equipo, para hacer disc&iacute;pulos y comenzar nuevas iglesias en nuevos territorios. Bernab&eacute; y Saulo decidieron llevarse al joven primo de Bernab&eacute;, Juan Marcos, con ellos como asistente. El primer lugar que visitaron fue el hogar de Bernab&eacute; en Chipre, una isla frente a la costa de Siria. Tambi&eacute;n fueron los creyentes de Chipre los que ayudaron a iniciar la iglesia en Antioqu&iacute;a (<span class="popup-link" @click = "popUp('pop3')"> Hechos 11:20</span>
    <div class="popup invisible" id="pop3">
<!-- begin bible -->
<p><sup class="versenum">20 </sup>Sin embargo, había entre ellos algunas personas de Chipre y de Cirene que, al llegar a Antioquía, comenzaron a hablarles también a los de habla griega, anunciándoles las buenas nuevas acerca del Señor Jesús.  </p>
<!-- end bible -->
</div>). Estas relaciones probablemente influyeron en sus planes. Como ciudadano romano, Saulo us&oacute; su nombre gentil, Pablo, mientras viajaba. Pablo y Bernab&eacute; son presentados al Gobernador de la isla a trav&eacute;s de un hechicero jud&iacute;o que llev&oacute; a un gran conflicto espiritual. Pablo no respondi&oacute; con temor, sino con la autoridad de Jes&uacute;s (<span class="popup-link" @click = "popUp('pop4')"> Mateo 28:18-20</span>
    <div class="popup invisible" id="pop4">
<!-- begin bible -->
<p><sup class="versenum">18 </sup>Jesús se acercó entonces a ellos y les dijo:</p><p>—Se me ha dado toda autoridad en el cielo y en la tierra.<sup class="versenum">19 </sup>Por tanto, vayan y hagan discípulos de todas las naciones, bautizándolos en el nombre del Padre y del Hijo y del Espíritu Santo,<sup class="versenum">20 </sup>enseñándoles a obedecer todo lo que les he mandado a ustedes. Y les aseguro que estaré con ustedes siempre, hasta el fin del mundo.</p>
<!-- end bible -->
</div>) para vencer la oposici&oacute;n demon&iacute;aca. La conversi&oacute;n del Gobernador fue otro hito importante, fue la primera vez que un gobernante pol&iacute;tico romano se convierte en un seguidor de Cristo.</p>

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

			<td class="social" @click="share('lesson', 'Líderes liberados para la expansión de la misión: ', '/content/M2/spa/multiply3/multiply324.html')">
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