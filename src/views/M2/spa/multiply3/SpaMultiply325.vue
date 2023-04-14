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
                        <div class="chapter_number ltr"><h1>25.</h1></div>
                        <div class="chapter_title ltr"><h1>Iglesia Plantada en la Capital de Galacia (Antioquía de Pisidia)</h1></div>
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
	<li class="back">Lea o vea <strong>Hechos 13:13-43</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 13:13-43</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<div>
<div>
<div>
<h3>En Antioqu&iacute;a de Pisidia</h3>

<p><sup class="versenum">13&nbsp;</sup>Pablo y sus compa&ntilde;eros se hicieron a la mar desde Pafos, y llegaron a Perge de Panfilia. Juan se separ&oacute; de ellos y regres&oacute; a Jerusal&eacute;n;<sup class="versenum">14&nbsp;</sup>ellos, por su parte, siguieron su viaje desde Perge hasta Antioqu&iacute;a de Pisidia. El s&aacute;bado entraron en la sinagoga y se sentaron.<sup class="versenum">15&nbsp;</sup>Al terminar la lectura de la ley y los profetas, los jefes de la sinagoga mandaron a decirles: &laquo;Hermanos, si tienen alg&uacute;n mensaje de aliento para el pueblo, hablen&raquo;.</p>

<p><sup class="versenum">16&nbsp;</sup>Pablo se puso en pie, hizo una se&ntilde;al con la mano y dijo: &laquo;Esc&uacute;chenme, israelitas, y ustedes, los gentiles temerosos de Dios:<sup class="versenum">17&nbsp;</sup>El Dios de este pueblo de Israel escogi&oacute; a nuestros antepasados y engrandeci&oacute; al pueblo mientras viv&iacute;an como extranjeros en Egipto. Con gran poder los sac&oacute; de aquella tierra<sup class="versenum">18&nbsp;</sup>y soport&oacute; su mal proceder en el desierto unos cuarenta a&ntilde;os.<sup class="versenum">19&nbsp;</sup>Luego de destruir siete naciones en Cana&aacute;n, dio a su pueblo la tierra de ellas en herencia.<sup class="versenum">20&nbsp;</sup>Todo esto dur&oacute; unos cuatrocientos cincuenta a&ntilde;os.</p>

<p>&raquo;Despu&eacute;s de esto, Dios les asign&oacute; jueces hasta los d&iacute;as del profeta Samuel.<sup class="versenum">21&nbsp;</sup>Entonces pidieron un rey, y Dios les dio a Sa&uacute;l, hijo de Quis, de la tribu de Benjam&iacute;n, que gobern&oacute; por cuarenta a&ntilde;os.<sup class="versenum">22&nbsp;</sup>Tras destituir a Sa&uacute;l, les puso por rey a David, de quien dio este testimonio: &ldquo;He encontrado en David, hijo de Isa&iacute;, un hombre conforme a mi coraz&oacute;n; &eacute;l realizar&aacute; todo lo que yo quiero&rdquo;.</p>

<p><sup class="versenum">23&nbsp;</sup>&raquo;De los descendientes de este, conforme a la promesa, Dios ha provisto a Israel un Salvador, que es Jes&uacute;s.<sup class="versenum">24&nbsp;</sup>Antes de la venida de Jes&uacute;s, Juan predic&oacute; un bautismo de arrepentimiento a todo el pueblo de Israel.<sup class="versenum">25&nbsp;</sup>Cuando estaba completando su carrera, Juan dec&iacute;a: &ldquo;&iquest;Qui&eacute;n suponen ustedes que soy? No soy aquel. Miren, despu&eacute;s de m&iacute; viene uno a quien no soy digno ni siquiera de desatarle las sandalias&rdquo;.</p>

<p><sup class="versenum">26&nbsp;</sup>&raquo;Hermanos, descendientes de Abraham, y ustedes, los gentiles temerosos de Dios: a nosotros se nos ha enviado este mensaje de salvaci&oacute;n.<sup class="versenum">27&nbsp;</sup>Los habitantes de Jerusal&eacute;n y sus gobernantes no reconocieron a Jes&uacute;s. Por tanto, al condenarlo, cumplieron las palabras de los profetas que se leen todos los s&aacute;bados.<sup class="versenum">28&nbsp;</sup>Aunque no encontraron ninguna causa digna de muerte, le pidieron a Pilato que lo mandara a ejecutar.<sup class="versenum">29&nbsp;</sup>Despu&eacute;s de llevar a cabo todas las cosas que estaban escritas acerca de &eacute;l, lo bajaron del madero y lo sepultaron.<sup class="versenum">30&nbsp;</sup>Pero Dios lo levant&oacute; de entre los muertos.<sup class="versenum">31&nbsp;</sup>Durante muchos d&iacute;as lo vieron los que hab&iacute;an subido con &eacute;l de Galilea a Jerusal&eacute;n, y ellos son ahora sus testigos ante el pueblo.</p>

<p><sup class="versenum">32&nbsp;</sup>&raquo;Nosotros les anunciamos a ustedes las buenas nuevas respecto a la promesa hecha a nuestros antepasados.<sup class="versenum">33&nbsp;</sup>Dios nos la ha cumplido plenamente a nosotros, los descendientes de ellos, al resucitar a Jes&uacute;s. Como est&aacute; escrito en el segundo salmo:</p>

<p>&raquo;&ldquo;T&uacute; eres mi hijo;<br />
&nbsp;&nbsp;&nbsp;&nbsp;hoy mismo te he engendrado&rdquo;.</p>
</div>

<p><sup class="versenum">34&nbsp;</sup>Dios lo resucit&oacute; para que no volviera jam&aacute;s a la corrupci&oacute;n. As&iacute; se cumplieron estas palabras:</p>

<p>&raquo;&ldquo;Yo les dar&eacute; las bendiciones santas y seguras prometidas a David&rdquo;.</p>
</div>

<p><sup class="versenum">35&nbsp;</sup>Por eso dice en otro pasaje:</p>

<p>&raquo;&ldquo;No permitir&aacute;s que el fin de tu santo sea la corrupci&oacute;n&rdquo;.</p>
</div>

<p><sup class="versenum">36&nbsp;</sup>&raquo;Ciertamente David, despu&eacute;s de servir a su propia generaci&oacute;n conforme al prop&oacute;sito de Dios, muri&oacute;, fue sepultado con sus antepasados, y su cuerpo sufri&oacute; la corrupci&oacute;n.<sup class="versenum">37&nbsp;</sup>Pero aquel a quien Dios resucit&oacute; no sufri&oacute; la corrupci&oacute;n de su cuerpo.</p>

<p><sup class="versenum">38&nbsp;</sup>&raquo;Por tanto, hermanos, sepan que por medio de Jes&uacute;s se les anuncia a ustedes el perd&oacute;n de los pecados.<sup class="versenum">39&nbsp;</sup>Ustedes no pudieron ser justificados de esos pecados por la ley de Mois&eacute;s, pero todo el que cree es justificado por medio de Jes&uacute;s.<sup class="versenum">40&nbsp;</sup>Tengan cuidado, no sea que les suceda lo que han dicho los profetas:</p>

<p><sup class="versenum">41&nbsp;</sup>&raquo;&ldquo;&iexcl;Miren, burlones!<br />
&nbsp;&nbsp;&nbsp;&nbsp;&iexcl;As&oacute;mbrense y desaparezcan!<br />
Estoy por hacer en estos d&iacute;as una obra<br />
&nbsp;&nbsp;&nbsp;&nbsp;que ustedes nunca creer&aacute;n,<br />
&nbsp;&nbsp;&nbsp;&nbsp;aunque alguien se la explique&rdquo;&raquo;.</p>
</div>

<p><sup class="versenum">42&nbsp;</sup>Al salir ellos de la sinagoga, los invitaron a que el siguiente s&aacute;bado les hablaran m&aacute;s de estas cosas.<sup class="versenum">43&nbsp;</sup>Cuando se disolvi&oacute; la asamblea, muchos jud&iacute;os y pros&eacute;litos fieles acompa&ntilde;aron a Pablo y a Bernab&eacute;, los cuales en su conversaci&oacute;n con ellos les instaron a perseverar en la gracia de Dios.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/325.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 13:13-43&nbsp;</button>
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
<p class="up">Pablo y Bernab&eacute; salen de Chipre hacia la provincia de Panfilia, donde Juan Marcos decide dejarlos. Viajando tierra adentro hacia el norte, llegan a Antioqu&iacute;a de Pisidia, la capital de la provincia monta&ntilde;osa de Galacia. La historia da una idea importante de por qu&eacute; pueden haber ido a esta ciudad. El Gobernador de Chipre ten&iacute;a familia en esa ciudad, lo que sugiere que Pablo y Bernab&eacute; continuaron siguiendo las redes relacionales que el Se&ntilde;or estaba abriendo. Esta ciudad tambi&eacute;n estaba en una encrucijada importante para la regi&oacute;n circundante. Pablo y Bernab&eacute; hablaron en la sinagoga, sabiendo que encontrar&iacute;an jud&iacute;os devotos y gentiles espiritualmente interesados (Hechos 13:26). Pablo us&oacute; historias de las Escrituras que mostraban que Jes&uacute;s era la provisi&oacute;n de Dios para su pecado (Hechos 13:38-39). Muchos creyeron, as&iacute; que Pablo y Bernab&eacute; hicieron un seguimiento inicial alent&aacute;ndolos a crecer en su relaci&oacute;n con Cristo.</p>

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

			<td class="social" @click="share('lesson', 'Iglesia Plantada en la Capital de Galacia (Antioquía de Pisidia): ', '/content/M2/spa/multiply3/multiply325.html')">
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