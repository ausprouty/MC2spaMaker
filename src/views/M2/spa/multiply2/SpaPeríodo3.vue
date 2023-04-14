<script>
import SQLiteService from '@/services/SQLiteService.js'
import { useFindSummaries, useFindCollapsible, usePopUp} from "@/assets/javascript/revealText.js"
import { useRevealMedia } from "@/assets/javascript/revealMedia.js"
import { useShare} from "@/assets/javascript/share.js"
import VueImageZoomer from '@/components/VueImageZoomer.vue'
import '@/assets/styles/vueImageZoomer.css';


export default {
  components: {
    VueImageZoomer
  },
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
<h1>Período 3: Entrenamiento ministerial y Periodo 4: Expansión del Alcance  </h1>
<div id="showVideoOptions"></div>
  <p style="text-align:justify">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/spa/images/custom/Period34.png" 
    zoom="/images/zoom/sites/mc2/content/M2/spa/images/custom/Period34.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/spa/images/custom/Period34.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<p style="text-align:justify"><span><span>Alrededor de finales del 27 d.C - finales del 28 d.C&nbsp;</span></span><span><span>Reclutar, entrenar y movilizar a un equipo misionero en crecimiento </span></span><span><span>para la siembra y hacer nuevos disc&iacute;pulos</span></span></p>

<p style="text-align:justify"><strong><span><span>Per&iacute;odo 3: Entrenamiento ministerial</span></span></strong></p>

<ul>
	<li class="nobreak-final-final" style="text-align:justify"><span><span>Este per&iacute;odo dura entre 6 y 9 meses y comienza con el traslado de Jes&uacute;s a Capernaum.&nbsp; Durante este per&iacute;odo, Jes&uacute;s desaf&iacute;a a cuatro pescadores (<span class="popup-link" @click = "popUp('pop1')"> Marcos 1:16-20</span>)&nbsp;</span></span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<p><sup class="versenum">16&nbsp;</sup>Pasando por la orilla del mar de Galilea, Jes&uacute;s vio a Sim&oacute;n y a su hermano Andr&eacute;s que echaban la red al lago, pues eran pescadores.<sup class="versenum">17&nbsp;</sup>&laquo;Vengan, s&iacute;ganme &mdash;les dijo Jes&uacute;s&mdash;, y los har&eacute; pescadores de hombres&raquo;.<sup class="versenum">18&nbsp;</sup>Al momento dejaron las redes y lo siguieron.</p>

	<p><sup class="versenum">19&nbsp;</sup>Un poco m&aacute;s adelante vio a Jacobo y a su hermano Juan, hijos de Zebedeo, que estaban en su barca remendando las redes.<sup class="versenum">20&nbsp;</sup>En seguida los llam&oacute;, y ellos, dejando a su padre Zebedeo en la barca con los jornaleros, se fueron con Jes&uacute;s.</p>
	<!-- end bible --></div>
	que ya eran seguidores de Jes&uacute;s desde su bautismo.&nbsp; Jes&uacute;s comienza a cambiar sus prioridades y se convierten en aprendices en la pesca de hombres.&nbsp; Estos cuatro hombres forman el equipo inicial de la misi&oacute;n, pero Jes&uacute;s pronto agrega Lev&iacute; (<span class="popup-link" @click = "popUp('pop2')"> Marcos 2:13-17</span>)&nbsp;

	<div class="popup invisible" id="pop2"><!-- begin bible -->
	<p><sup class="versenum">13&nbsp;</sup>De nuevo sali&oacute; Jes&uacute;s a la orilla del lago. Toda la gente acud&iacute;a a &eacute;l, y &eacute;l les ense&ntilde;aba.<sup class="versenum">14&nbsp;</sup>Al pasar vio a Lev&iacute; hijo de Alfeo, donde este cobraba impuestos.</p>

	<p>&mdash;S&iacute;gueme &mdash;le dijo Jes&uacute;s.</p>

	<p>Y Lev&iacute; se levant&oacute; y lo sigui&oacute;.</p>

	<p><sup class="versenum">15&nbsp;</sup>Sucedi&oacute; que, estando Jes&uacute;s a la mesa en casa de Lev&iacute;, muchos recaudadores de impuestos y pecadores se sentaron con &eacute;l y sus disc&iacute;pulos, pues ya eran muchos los que lo segu&iacute;an.<sup class="versenum">16&nbsp;</sup>Cuando los maestros de la ley que eran fariseos vieron con qui&eacute;n com&iacute;a, les preguntaron a sus disc&iacute;pulos:</p>

	<p>&mdash;&iquest;Y este come con recaudadores de impuestos y con pecadores?</p>

	<p><sup class="versenum">17&nbsp;</sup>Al o&iacute;rlos, Jes&uacute;s les contest&oacute;:</p>

	<p>&mdash;No son los sanos los que necesitan m&eacute;dico, sino los enfermos. Y yo no he venido a llamar a justos, sino a pecadores.</p>
	<!-- end bible --></div>
	&nbsp;y otros.</li>
</ul>

<p style="text-align:justify"><strong><span><span>Per&iacute;odo 4: Expansi&oacute;n del alcance</span></span></strong></p>

<ul>
	<li class="nobreak-final-final" style="text-align:justify"><span><span>Este per&iacute;odo dura de 6 a 9 meses y se ejecuta en paralelo con el per&iacute;odo 3.&nbsp;&nbsp; Mientras Jes&uacute;s est&aacute; reclutando un equipo inicial del ministerio para compartir en el trabajo de la misi&oacute;n, genera oportunidades para su &ldquo;entrenamiento en el campo&quot; a trav&eacute;s de alcances locales (<span class="popup-link" @click = "popUp('pop3')"> Marcos 1:21-34</span>),&nbsp;</span></span>

	<div class="popup invisible" id="pop3"><!-- begin bible -->
	<h3>Jes&uacute;s expulsa a un esp&iacute;ritu maligno</h3>

	<p><sup class="versenum">21&nbsp;</sup>Entraron en Caperna&uacute;m y, tan pronto como lleg&oacute; el s&aacute;bado, Jes&uacute;s fue a la sinagoga y se puso a ense&ntilde;ar.<sup class="versenum">22&nbsp;</sup>La gente se asombraba de su ense&ntilde;anza, porque la impart&iacute;a como quien tiene autoridad y no como los maestros de la ley.<sup class="versenum">23&nbsp;</sup>De repente, en la sinagoga, un hombre que estaba pose&iacute;do por un esp&iacute;ritu maligno grit&oacute;:</p>

	<p><sup class="versenum">24&nbsp;</sup>&mdash;&iquest;Por qu&eacute; te entrometes, Jes&uacute;s de Nazaret? &iquest;Has venido a destruirnos? Yo s&eacute; qui&eacute;n eres t&uacute;: &iexcl;el Santo de Dios!</p>

	<p><sup class="versenum">25&nbsp;</sup>&mdash;&iexcl;C&aacute;llate! &mdash;lo reprendi&oacute; Jes&uacute;s&mdash;. &iexcl;Sal de ese hombre!</p>

	<p><sup class="versenum">26&nbsp;</sup>Entonces el esp&iacute;ritu maligno sacudi&oacute; al hombre violentamente y sali&oacute; de &eacute;l dando un alarido.<sup class="versenum">27&nbsp;</sup>Todos se quedaron tan asustados que se preguntaban unos a otros: &laquo;&iquest;Qu&eacute; es esto? &iexcl;Una ense&ntilde;anza nueva, pues lo hace con autoridad! Les da &oacute;rdenes incluso a los esp&iacute;ritus malignos, y le obedecen&raquo;.<sup class="versenum">28&nbsp;</sup>Como resultado, su fama se extendi&oacute; r&aacute;pidamente por toda la regi&oacute;n de Galilea.</p>

	<p><sup class="versenum">29&nbsp;</sup>Tan pronto como salieron de la sinagoga, Jes&uacute;s fue con Jacobo y Juan a casa de Sim&oacute;n y Andr&eacute;s.<sup class="versenum">30&nbsp;</sup>La suegra de Sim&oacute;n estaba en cama con fiebre, y en seguida se lo dijeron a Jes&uacute;s.<sup class="versenum">31&nbsp;</sup>&Eacute;l se le acerc&oacute;, la tom&oacute; de la mano y la ayud&oacute; a levantarse. Entonces se le quit&oacute; la fiebre y se puso a servirles.</p>

	<p><sup class="versenum">32&nbsp;</sup>Al atardecer, cuando ya se pon&iacute;a el sol, la gente le llev&oacute; a Jes&uacute;s todos los enfermos y endemoniados,<sup class="versenum">33&nbsp;</sup>de manera que la poblaci&oacute;n entera se estaba congregando a la puerta.<sup class="versenum">34&nbsp;</sup>Jes&uacute;s san&oacute; a muchos que padec&iacute;an de diversas enfermedades. Tambi&eacute;n expuls&oacute; a muchos demonios, pero no los dejaba hablar porque sab&iacute;an qui&eacute;n era &eacute;l.</p>
	<!-- end bible --></div>
	alcances regionales y campa&ntilde;as ampliadas (<span class="popup-link" @click = "popUp('pop4')"> Marcos 1:35-39</span>).&nbsp;

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">35&nbsp;</sup>Muy de madrugada, cuando todav&iacute;a estaba oscuro, Jes&uacute;s se levant&oacute;, sali&oacute; de la casa y se fue a un lugar solitario, donde se puso a orar.<sup class="versenum">36&nbsp;</sup>Sim&oacute;n y sus compa&ntilde;eros salieron a buscarlo.</p>

	<p><sup class="versenum">37&nbsp;</sup>Por fin lo encontraron y le dijeron:</p>

	<p>&mdash;Todo el mundo te busca.</p>

	<p><sup class="versenum">38&nbsp;</sup>Jes&uacute;s respondi&oacute;:</p>

	<p>&mdash;V&aacute;monos de aqu&iacute; a otras aldeas cercanas donde tambi&eacute;n pueda predicar; para esto he venido.</p>

	<p><sup class="versenum">39&nbsp;</sup>As&iacute; que recorri&oacute; toda Galilea, predicando en las sinagogas y expulsando demonios.</p>
	<!-- end bible --></div>
	</li>
</ul>

<p>&nbsp;Este alcance ampliado se caracteriza por una aceleraci&oacute;n del movimiento, pero tambi&eacute;n trae una mayor oposici&oacute;n (<span class="popup-link" @click = "popUp('pop5')"> Marcos 3:6</span>).</p>

<div class="popup invisible" id="pop5"><!-- begin bible -->
<p><sup class="versenum">6&nbsp;</sup>Tan pronto como salieron los fariseos, comenzaron a tramar con los herodianos c&oacute;mo matar a Jes&uacute;s.</p>
</div>


<!-- begin sdcard languageFooterSingle -->
<!-- begin mc2 sdcard languageFooter -->

<div class="languages" id="languages"><img class="languages" src="@/assets/sites/mc2/images/standard/OtherLanguagesTop.png" /></div>
<table class="social">
	<tbody>
		<tr>
			<td class="social"  @click="share('android', 'spa', '')">
				<img  class="social" src="@/assets/sites/mc2/images/standard/android.png" />
			</td>

			<td class="social" @click="share('lesson', 'Período 3: Entrenamiento ministerial y Periodo 4: Expansión del Alcance  : ', '/content/M2/spa/multiply2/Período3.html')">
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