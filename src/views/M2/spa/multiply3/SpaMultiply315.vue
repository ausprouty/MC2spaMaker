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
                        <div class="chapter_number ltr"><h1>15.</h1></div>
                        <div class="chapter_title ltr"><h1>El Espíritu dirige a Felipe hacia una estratégica Persona de paz</h1></div>
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

<ul><li class="nobreak-final-final">(Opcional) Jesucristo es el Se&ntilde;or, para la gloria de Dios Padre. &Eacute;l quiere que todos los hombres sean salvos y lleguen al conocimiento de la verdad. Porque hay un solo Dios y un mediador tambi&eacute;n entre Dios y el hombre, el hombre Jesucristo, que se entreg&oacute; a s&iacute; mismo como rescate por todos. (<span class="popup-link" @click = "popUp('pop1')"> Filipenses 2:11b</span>;

<div class="popup invisible" id="pop1"><!-- begin bible -->
<div>
<p><sup class="versenum">11&nbsp; </sup>&nbsp;...&nbsp; &nbsp;para gloria de Dios Padre.</p>
</div>
<!-- end bible --></div>
&nbsp;<span class="popup-link" @click = "popUp('pop2')"> 1 Timoteo 2:4-6a)</span>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">4&nbsp;</sup>pues &eacute;l quiere que todos sean salvos y lleguen a conocer la verdad.<sup class="versenum">5&nbsp;</sup>Porque hay un solo Dios y un solo mediador entre Dios y los hombres, Jesucristo hombre,<sup class="versenum">6&nbsp;</sup>quien dio su vida como rescate por todos. Este testimonio Dios lo ha dado a su debido tiempo,</p>
</div>

</li></ul>

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
	<li class="back">Lea o vea <strong>Hechos 8:26-40</strong> dos veces mientras todos escuchan</li>
</ul>

<button id="Button0" type="button" class="collapsible bible">Lee Hechos 8:26-40</button><div class="collapsed" id ="Text0">
<!-- begin bible -->

<div>
<h3>Felipe y el et&iacute;ope</h3>

<p><sup class="versenum">26&nbsp;</sup>Un &aacute;ngel del Se&ntilde;or le dijo a Felipe: &laquo;Ponte en marcha hacia el sur, por el camino del desierto que baja de Jerusal&eacute;n a Gaza&raquo;.<sup class="versenum">27&nbsp;</sup>Felipe emprendi&oacute; el viaje, y resulta que se encontr&oacute; con un et&iacute;ope eunuco, alto funcionario encargado de todo el tesoro de la Candace, reina de los et&iacute;opes. Este hab&iacute;a ido a Jerusal&eacute;n para adorar<sup class="versenum">28&nbsp;</sup>y, en el viaje de regreso a su pa&iacute;s, iba sentado en su carroza, leyendo el libro del profeta Isa&iacute;as.<sup class="versenum">29&nbsp;</sup>El Esp&iacute;ritu le dijo a Felipe: &laquo;Ac&eacute;rcate y j&uacute;ntate a ese carro&raquo;.</p>

<p><sup class="versenum">30&nbsp;</sup>Felipe se acerc&oacute; de prisa a la carroza y, al o&iacute;r que el hombre le&iacute;a al profeta Isa&iacute;as, le pregunt&oacute;:</p>

<p>&mdash;&iquest;Acaso entiende usted lo que est&aacute; leyendo?</p>

<p><sup class="versenum">31&nbsp;</sup>&mdash;&iquest;Y c&oacute;mo voy a entenderlo &mdash;contest&oacute;&mdash; si nadie me lo explica?</p>

<p>As&iacute; que invit&oacute; a Felipe a subir y sentarse con &eacute;l.<sup class="versenum">32&nbsp;</sup>El pasaje de la Escritura que estaba leyendo era el siguiente:</p>

<p>&laquo;Como oveja, fue llevado al matadero;<br />
&nbsp;&nbsp;&nbsp;&nbsp;y como cordero que enmudece ante su trasquilador,<br />
&nbsp;&nbsp;&nbsp;&nbsp;ni siquiera abri&oacute; su boca.<br />
<sup class="versenum">33&nbsp;</sup>Lo humillaron y no le hicieron justicia.<br />
&nbsp;&nbsp;&nbsp;&nbsp;&iquest;Qui&eacute;n describir&aacute; su descendencia?<br />
&nbsp;&nbsp;&nbsp;&nbsp;Porque su vida fue arrancada de la tierra&raquo;.</p>
</div>

<p><sup class="versenum">34&nbsp;</sup>&mdash;D&iacute;game usted, por favor, &iquest;de qui&eacute;n habla aqu&iacute; el profeta, de s&iacute; mismo o de alg&uacute;n otro? &mdash;le pregunt&oacute; el eunuco a Felipe.</p>

<p><sup class="versenum">35&nbsp;</sup>Entonces Felipe, comenzando con ese mismo pasaje de la Escritura, le anunci&oacute; las buenas nuevas acerca de Jes&uacute;s.<sup class="versenum">36&nbsp;</sup>Mientras iban por el camino, llegaron a un lugar donde hab&iacute;a agua, y dijo el eunuco:</p>

<p>&mdash;Mire usted, aqu&iacute; hay agua. &iquest;Qu&eacute; impide que yo sea bautizado?</p>

<p><sup class="versenum">38&nbsp;</sup>Entonces mand&oacute; parar la carroza, y ambos bajaron al agua, y Felipe lo bautiz&oacute;.<sup class="versenum">39&nbsp;</sup>Cuando subieron del agua, el Esp&iacute;ritu del Se&ntilde;or se llev&oacute; de repente a Felipe. El eunuco no volvi&oacute; a verlo, pero sigui&oacute; alegre su camino.<sup class="versenum">40&nbsp;</sup>En cuanto a Felipe, apareci&oacute; en Azoto, y se fue predicando el evangelio en todos los pueblos hasta que lleg&oacute; a Cesarea.</p>
<!-- end bible -->

<p class="bible"></p>

</div>


<button id="MC2/spa/video/multiply3/315.mp4" type="button" class="external-movie">
         Mira &nbsp;Hechos 8:26-40&nbsp;</button>
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
<p class="up">El Esp&iacute;ritu interrumpi&oacute; el exitoso ministerio de Felipe en Samaria envi&aacute;ndolo al punto m&aacute;s meridional de Israel para conocer a una persona de paz muy estrat&eacute;gica. Felipe mostr&oacute; su coraz&oacute;n obediente y una sensibilidad hacia el Esp&iacute;ritu al ir sin saber los detalles de por qu&eacute; estaba siendo enviado. El l&iacute;der et&iacute;ope que conoci&oacute; era un hombre no jud&iacute;o que hab&iacute;a aceptado la fe jud&iacute;a. Como persona no jud&iacute;a y eunuco (alguien que hab&iacute;a sido castrado para servir a una corte femenina), no ser&iacute;a considerado plenamente aceptable para la fe jud&iacute;a. &iexcl;Pero Jes&uacute;s estaba listo para aceptarlo! El Se&ntilde;or hab&iacute;a estado preparando el coraz&oacute;n del et&iacute;ope y us&oacute; a Felipe para decirle las buenas nuevas. Felipe sigui&oacute; el mismo patr&oacute;n de bautismo que aprendi&oacute; mientras estaba en Jerusal&eacute;n y tambi&eacute;n us&oacute; en Samaria. El et&iacute;ope crey&oacute; y fue bautizado inmediatamente. Felipe comparti&oacute; el Evangelio en todas las ciudades a lo largo de la costa de Israel. Finalmente se estableci&oacute; en Cesarea, que era la gran ciudad portuaria internacional de Israel y la sede del poder romano en la provincia.</p>



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

			<td class="social" @click="share('lesson', 'El Espíritu dirige a Felipe hacia una estratégica Persona de paz: ', '/content/M2/spa/multiply3/multiply315.html')">
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