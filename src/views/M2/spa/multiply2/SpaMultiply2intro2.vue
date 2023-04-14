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
<h1>Periodo 2: Fundamentos del ministerio</h1>
<div id="showVideoOptions"></div>
  <p style="text-align:justify">   
    <div class="zoom-image">
    <vue-image-zoomer
    regular="/images/zoom/sites/mc2/content/M2/spa/images/custom/Period2.png" 
    zoom="/images/zoom/sites/mc2/content/M2/spa/images/custom/Period2.png" :zoom-amount="3" img-class="img-fluid" alt="">
    <img src="@/assets/sites/mc2/content/M2/spa/images/custom/Period2.png" img-class="img-fluid" />
    </vue-image-zoomer>
    </div></p>

<h4>Alrededor de la primavera&nbsp;<span><span>26 d.C - finales del 27 d.C.&nbsp;</span></span></h4>

<h3><span><span>Establecer como base una relaci&oacute;n centrada en Dios para hacer disc&iacute;pulos.</span></span></h3>

<ul>
	<li class="nobreak-final-final" style="text-align:justify"><span lang="es">Este per&iacute;odo comienza a mediados del a&ntilde;o 26 d.C cuando Jes&uacute;s tiene aproximadamente 30 a&ntilde;os y dura de 18 a 21 meses.&nbsp; El ministerio p&uacute;blico de Jes&uacute;s inicia con su bautismo y luego crece constantemente a trav&eacute;s de los contactos iniciales que hizo (<span class="popup-link" @click = "popUp('pop1')"> Juan 1:35-44</span>),&nbsp;</span>

	<div class="popup invisible" id="pop1"><!-- begin bible -->
	<h3>Los primeros disc&iacute;pulos de Jes&uacute;s</h3>

	<p><sup class="versenum">35&nbsp;</sup>Al d&iacute;a siguiente Juan estaba de nuevo all&iacute;, con dos de sus disc&iacute;pulos.<sup class="versenum">36&nbsp;</sup>Al ver a Jes&uacute;s que pasaba por ah&iacute;, dijo:</p>

	<p>&mdash;&iexcl;Aqu&iacute; tienen al Cordero de Dios!</p>

	<p><sup class="versenum">37&nbsp;</sup>Cuando los dos disc&iacute;pulos le oyeron decir esto, siguieron a Jes&uacute;s.<sup class="versenum">38&nbsp;</sup>Jes&uacute;s se volvi&oacute; y, al ver que lo segu&iacute;an, les pregunt&oacute;:</p>

	<p>&mdash;&iquest;Qu&eacute; buscan?</p>

	<p>&mdash;Rab&iacute;, &iquest;d&oacute;nde te hospedas? (Rab&iacute; significa: Maestro).</p>

	<p><sup class="versenum">39&nbsp;</sup>&mdash;Vengan a ver &mdash;les contest&oacute; Jes&uacute;s.</p>

	<p>Ellos fueron, pues, y vieron d&oacute;nde se hospedaba, y aquel mismo d&iacute;a se quedaron con &eacute;l. Eran como las cuatro de la tarde.</p>

	<p><sup class="versenum">40&nbsp;</sup>Andr&eacute;s, hermano de Sim&oacute;n Pedro, era uno de los dos que, al o&iacute;r a Juan, hab&iacute;an seguido a Jes&uacute;s.<sup class="versenum">41&nbsp;</sup>Andr&eacute;s encontr&oacute; primero a su hermano Sim&oacute;n, y le dijo:</p>

	<p>&mdash;Hemos encontrado al Mes&iacute;as (es decir, el Cristo).</p>

	<p><sup class="versenum">42&nbsp;</sup>Luego lo llev&oacute; a Jes&uacute;s, quien, mir&aacute;ndolo fijamente, le dijo:</p>

	<p>&mdash;T&uacute; eres Sim&oacute;n, hijo de Juan. Ser&aacute;s llamado Cefas (es decir, Pedro).</p>

	<p><sup class="versenum">43&nbsp;</sup>Al d&iacute;a siguiente, Jes&uacute;s decidi&oacute; salir hacia Galilea. Se encontr&oacute; con Felipe, y lo llam&oacute;:</p>

	<p>&mdash;S&iacute;gueme.</p>

	<p><sup class="versenum">44&nbsp;</sup>Felipe era del pueblo de Betsaida, lo mismo que Andr&eacute;s y Pedro.</p>
	<!-- end bible --></div>
	encontrando a sus primeros seguidores y a la multitud que se re&uacute;ne para saber m&aacute;s de &Eacute;l (<span class="popup-link" @click = "popUp('pop2')"> Juan 4:1-4</span>).</li>
</ul>

<div class="popup invisible" id="pop2"><!-- begin bible -->
<p><sup class="versenum">1 </sup>Jes&uacute;s se enter&oacute; de que los fariseos sab&iacute;an que &eacute;l estaba haciendo y bautizando m&aacute;s disc&iacute;pulos que Juan<sup class="versenum">2&nbsp;</sup>(aunque en realidad no era Jes&uacute;s quien bautizaba, sino sus disc&iacute;pulos).<sup class="versenum">3&nbsp;</sup>Por eso se fue de Judea y volvi&oacute; otra vez a Galilea.<sup class="versenum">4&nbsp;</sup>Como ten&iacute;a que pasar por Samaria,</p>
<!-- end bible --></div>

<p>Termina con su primer rechazo en su pueblo natal de Nazaret (<span class="popup-link" @click = "popUp('pop3')"> Lucas 4:16-31</span>).</p>

<div class="popup invisible" id="pop3"><!-- begin bible -->
<div>
<p><sup class="versenum">16&nbsp;</sup>Fue a Nazaret, donde se hab&iacute;a criado, y un s&aacute;bado entr&oacute; en la sinagoga, como era su costumbre. Se levant&oacute; para hacer la lectura,<sup class="versenum">17&nbsp;</sup>y le entregaron el libro del profeta Isa&iacute;as. Al desenrollarlo, encontr&oacute; el lugar donde est&aacute; escrito:</p>

<p><sup class="versenum">18&nbsp;</sup>&laquo;El Esp&iacute;ritu del Se&ntilde;or est&aacute; sobre m&iacute;,<br />
&nbsp;&nbsp;&nbsp;&nbsp;por cuanto me ha ungido<br />
&nbsp;&nbsp;&nbsp;&nbsp;para anunciar buenas nuevas a los pobres.<br />
Me ha enviado a proclamar libertad a los cautivos<br />
&nbsp;&nbsp;&nbsp;&nbsp;y dar vista a los ciegos,<br />
a poner en libertad a los oprimidos,<br />
<sup class="versenum">19&nbsp;</sup>&nbsp;&nbsp;&nbsp;&nbsp;a pregonar el a&ntilde;o del favor del Se&ntilde;or&raquo;.</p>
</div>

<p><sup class="versenum">20&nbsp;</sup>Luego enroll&oacute; el libro, se lo devolvi&oacute; al ayudante y se sent&oacute;. Todos los que estaban en la sinagoga lo miraban detenidamente,<sup class="versenum">21&nbsp;</sup>y &eacute;l comenz&oacute; a hablarles: &laquo;Hoy se cumple esta Escritura en presencia de ustedes&raquo;.</p>

<p><sup class="versenum">22&nbsp;</sup>Todos dieron su aprobaci&oacute;n, impresionados por las hermosas palabras que sal&iacute;an de su boca. &laquo;&iquest;No es este el hijo de Jos&eacute;?&raquo;, se preguntaban.</p>

<p><sup class="versenum">23&nbsp;</sup>Jes&uacute;s continu&oacute;: &laquo;Seguramente ustedes me van a citar el proverbio: &ldquo;&iexcl;M&eacute;dico, c&uacute;rate a ti mismo! Haz aqu&iacute; en tu tierra lo que hemos o&iacute;do que hiciste en Caperna&uacute;m&rdquo;.<sup class="versenum">24&nbsp;</sup>Pues bien, les aseguro que a ning&uacute;n profeta lo aceptan en su propia tierra.<sup class="versenum">25&nbsp;</sup>No cabe duda de que en tiempos de El&iacute;as, cuando el cielo se cerr&oacute; por tres a&ntilde;os y medio, de manera que hubo una gran hambre en toda la tierra, muchas viudas viv&iacute;an en Israel.<sup class="versenum">26&nbsp;</sup>Sin embargo, El&iacute;as no fue enviado a ninguna de ellas, sino a una viuda de Sarepta, en los alrededores de Sid&oacute;n.<sup class="versenum">27&nbsp;</sup>As&iacute; mismo, hab&iacute;a en Israel muchos enfermos de lepra en tiempos del profeta Eliseo, pero ninguno de ellos fue sanado, sino Naam&aacute;n el sirio&raquo;.</p>

<p><sup class="versenum">28&nbsp;</sup>Al o&iacute;r esto, todos los que estaban en la sinagoga se enfurecieron.<sup class="versenum">29&nbsp;</sup>Se levantaron, lo expulsaron del pueblo y lo llevaron hasta la cumbre de la colina sobre la que estaba construido el pueblo, para tirarlo por el precipicio.<sup class="versenum">30&nbsp;</sup>Pero &eacute;l pas&oacute; por en medio de ellos y se fue.</p>

<p><sup class="versenum">31&nbsp;</sup>Jes&uacute;s pas&oacute; a Caperna&uacute;m, un pueblo de Galilea, y el d&iacute;a s&aacute;bado ense&ntilde;aba a la gente.</p>
<!-- end bible --></div>

<ul>
	<li class="nobreak-final-final" style="text-align:justify"><span><span><span><span lang="es"><span>Este per&iacute;odo se caracteriza por el establecimiento de los fundamentos del ministerio. Jes&uacute;s crea intencionalmente un entorno relacional en el que re&uacute;ne a las personas como seguidores del nuevo camino. El ministerio de Jes&uacute;s comienza de la nada y crece con el tiempo hasta superar el tama&ntilde;o del ministerio de Juan el Bautista (<span class="popup-link" @click = "popUp('pop4')"> Juan 4:1-3</span>;&nbsp;</span></span></span></span></span>

	<div class="popup invisible" id="pop4"><!-- begin bible -->
	<p><sup class="versenum">1 </sup>Jes&uacute;s se enter&oacute; de que los fariseos sab&iacute;an que &eacute;l estaba haciendo y bautizando m&aacute;s disc&iacute;pulos que Juan<sup class="versenum">2&nbsp;</sup>(aunque en realidad no era Jes&uacute;s quien bautizaba, sino sus disc&iacute;pulos).<sup class="versenum">3&nbsp;</sup>Por eso se fue de Judea y volvi&oacute; otra vez a Galilea.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop6')"> Lucas 3:19-20</span>;

	<div class="popup invisible" id="pop6"><!-- begin bible -->
	<p><sup class="versenum">19&nbsp;</sup>Pero, cuando reprendi&oacute; al tetrarca Herodes por el asunto de su cu&ntilde;ada Herod&iacute;as, y por todas las otras maldades que hab&iacute;a cometido,<sup class="versenum">20&nbsp;</sup>Herodes lleg&oacute; hasta el colmo de encerrar a Juan en la c&aacute;rcel.</p>
	<!-- end bible --></div>
	<span class="popup-link" @click = "popUp('pop5')"> Mateo 4:12</span>).

	<div class="popup invisible" id="pop5"><!-- begin bible -->
	<p><sup class="versenum">12&nbsp;</sup>Cuando Jes&uacute;s oy&oacute; que hab&iacute;an encarcelado a Juan, regres&oacute; a Galilea.</p>
	<!-- end bible --></div>
	</li>
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

			<td class="social" @click="share('lesson', 'Periodo 2: Fundamentos del ministerio: ', '/content/M2/spa/multiply2/multiply2intro2.html')">
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