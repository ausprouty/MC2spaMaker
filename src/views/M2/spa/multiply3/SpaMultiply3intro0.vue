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
<h1>El Reino en expansión</h1>
<div id="showVideoOptions"></div>
  <ul>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span>Jes&uacute;s fue enviado del cielo para una misi&oacute;n del reino global. &Eacute;l comenz&oacute; Su ministerio con unos pocos disc&iacute;pulos que vinieron del ministerio de Juan el Bautista.&nbsp; El alcance declarado de Su obra era llegar a todas las ciudades de Israel (<span class="popup-link" @click = "popUp('pop1')"> Marcos 1:38</span>),&nbsp;</span></span></span>
	<div class="popup invisible" id="pop1"><span><span><span><!-- begin bible --> </span></span></span>
	<p><span><span><span><sup class="versenum">38&nbsp;</sup>Jes&uacute;s respondi&oacute;:</span></span></span></p>

	<p><span><span><span>&mdash;V&aacute;monos de aqu&iacute; a otras aldeas cercanas donde tambi&eacute;n pueda predicar; para esto he venido.</span></span></span></p>
	<span><span><span> <!-- end bible --> </span></span></span></div>
	<span><span><span>pero &Eacute;l estaba preparando a Sus seguidores para m&aacute;s. &Eacute;l no s&oacute;lo les ense&ntilde;&oacute; verdades sobre el Reino, sino que, en Su humanidad, &Eacute;l model&oacute; a Sus seguidores una vida centrada en el Reino y dependiente del Esp&iacute;ritu. El ministerio de Jes&uacute;s se extendi&oacute; por todas partes seleccionando l&iacute;deres y empoder&aacute;ndolos para ir a nuevos lugares. Luego, antes de Su muerte en la cruz, Jes&uacute;s comparti&oacute; con ellos todo el alcance de la misi&oacute;n del Reino:&nbsp; &quot;Este Evangelio del Reino ser&aacute; proclamado como un testimonio para todas las naciones, entonces vendr&aacute; el fin&quot;. (<span class="popup-link" @click = "popUp('pop2')"> Mateo 24:14</span>).&nbsp;</span></span></span>

	<div class="popup invisible" id="pop2"><span><span><span><!-- begin bible --> </span></span></span>

	<p><span><span><span><sup class="versenum">14&nbsp;</sup>Y este evangelio del reino se predicar&aacute; en todo el mundo como testimonio a todas las naciones, y entonces vendr&aacute; el fin.</span></span></span></p>
	<span><span><span> <!-- end bible --> </span></span></span></div>
	<span><span><span>Su visi&oacute;n fue y sigue siendo el establecimiento del Reino de Dios entre los miles de grupos de personas en todo el mundo, donde su nombre ser&iacute;a honrado, y su voluntad ser&iacute;a hecha (<span class="popup-link" @click = "popUp('pop3')"> Mateo 6:9-10</span>).&nbsp;</span></span></span>

	<div class="popup invisible" id="pop3"><span><span><span><!-- begin bible --></span></span></span>

	<div>
	<p><span><span><span><sup class="versenum">9&nbsp;</sup>&raquo;Ustedes deben orar as&iacute;:</span></span></span></p>

	<p><span><span><span>&raquo;&ldquo;Padre nuestro que est&aacute;s en el cielo,<br />
	santificado sea tu nombre,<br />
	<sup class="versenum">10&nbsp;</sup>venga tu reino,<br />
	h&aacute;gase tu voluntad<br />
	&nbsp;&nbsp;&nbsp;&nbsp;en la tierra como en el cielo.</span></span></span></p>
	</div>
	<span><span><span> <!-- end bible --> </span></span></span></div>
	</li>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span>Jes&uacute;s hab&iacute;a mostrado a sus disc&iacute;pulos c&oacute;mo conectarse con las personas perdidas, para hacer disc&iacute;pulos que tambi&eacute;n har&iacute;an disc&iacute;pulos, y c&oacute;mo identificar y entrenar a los l&iacute;deres que ir&iacute;an a repetir este proceso en todos los grupos de personas.&nbsp; Lo que Jes&uacute;s comenz&oacute; a hacer mientras estaba en la tierra, continu&oacute; desde el cielo a trav&eacute;s de Sus seguidores llenos del Esp&iacute;ritu de acuerdo con Su promesa: &quot;Cualquiera que crea en m&iacute; har&aacute; las obras que he estado haciendo, y har&aacute; obras mayores que lo que he hecho&quot;. (<span class="popup-link" @click = "popUp('pop4')"> Juan 14:12</span>);&nbsp;</span></span></span>
	<div class="popup invisible" id="pop4"><span><span><span><!-- begin bible --> </span></span></span>
	<p><span><span><span><sup class="versenum">12&nbsp;</sup>Ciertamente les aseguro que el que cree en m&iacute; las obras que yo hago tambi&eacute;n &eacute;l las har&aacute;, y aun las har&aacute; mayores, porque yo vuelvo al Padre. </span></span></span></p>
	<span><span><span> <!-- end bible --> </span></span></span></div>
	<span><span><span>&nbsp;&quot;Es bueno para ti que me vaya. Te enviar&eacute; un Ayudante.&quot; (<span class="popup-link" @click = "popUp('pop6')"> Juan 16:7</span>);</span></span></span>

	<div class="popup invisible" id="pop6"><span><span><span><!-- begin bible --> </span></span></span>

	<p><span><span><span><sup class="versenum">7&nbsp;</sup>Pero les digo la verdad: Les conviene que me vaya porque, si no lo hago, el Consolador no vendr&aacute; a ustedes; en cambio, si me voy, se lo enviar&eacute; a ustedes. </span></span></span></p>
	<span><span><span> <!-- end bible --> </span></span></span></div>
	<span><span><span>&nbsp;&quot;... recibir&aacute;s poder cuando el Esp&iacute;ritu Santo venga sobre ti; y ustedes ser&aacute;n mis testigos en Jerusal&eacute;n, y en toda Judea y Samaria, y hasta los confines de la tierra.&quot; (<span class="popup-link" @click = "popUp('pop5')"> Hechos 1:8</span>).</span></span></span>

	<div class="popup invisible" id="pop5"><span><span><span><!-- begin bible --> </span></span></span>

	<p><span><span><span><sup class="versenum">8&nbsp;</sup>Pero, cuando venga el Esp&iacute;ritu Santo sobre ustedes, recibir&aacute;n poder y ser&aacute;n mis testigos tanto en Jerusal&eacute;n como en toda Judea y Samaria, y hasta los confines de la tierra.</span></span></span></p>
	</div>
	</li>
</ul>

<p style="text-align:justify"><span><span><span>Esta es la historia de Hechos.&nbsp; Captura para nosotros el movimiento del Esp&iacute;ritu de Dios estableciendo y expandiendo el Reino a todos los pueblos. Sus disc&iacute;pulos comenzaron a vivir la vida dependiente del Esp&iacute;ritu que se les ense&ntilde;&oacute;.&nbsp; Tambi&eacute;n proporciona el contexto del movimiento que nos ayuda a aplicar el resto de las cartas del Nuevo Testamento a la misi&oacute;n de Jes&uacute;s.&nbsp; A trav&eacute;s de un per&iacute;odo de s&oacute;lo 30 a&ntilde;os, se sentaron las bases para la expansi&oacute;n del Reino, que se caracteriz&oacute; por su impacto en la sociedad y el desarrollo de nuevos disc&iacute;pulos y nuevas iglesias en todas partes.</span></span></span></p>


<button id="MC2/spa/video/multiply3/3intro0.mp4" type="button" class="external-movie">
         Mira &nbsp;Los Viajes de Pablo&nbsp;</button>
    <div class="collapsed"></div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'El Reino en expansión: ', '/content/M2/spa/multiply3/multiply3intro0.html')">
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