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
<h1>Ser como Jesús: El modelo del Reino</h1>
<div id="showVideoOptions"></div>
  <ul>
	<li class="nobreak-final-final" style="text-align:justify"><span><span>La Navidad es el tiempo que celebramos el misterio de La Palabra (<span class="popup-link" @click = "popUp('pop1')"> Juan 1:1</span>).&nbsp;</span></span>
	<div class="popup invisible" id="pop1"><span><span><!-- begin bible --></span></span>
	<div>
	<p><span><span><sup class="versenum">1 </sup>En el principio ya exist&iacute;a el Verbo,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y el Verbo estaba con Dios,<br />
	&nbsp;&nbsp;&nbsp;&nbsp;y el Verbo era Dios.</span></span></p>
	</div>
	<span><span> <!-- end bible --> </span></span></div>
	<span><span>&nbsp;La Palabra se hizo plenamente humana (<span class="popup-link" @click = "popUp('pop2')"> Juan 1:14)</span> </span></span>

	<div class="popup invisible" id="pop2"><span><span><!-- begin bible --> </span></span>

	<p><span><span><sup class="versenum">14&nbsp;</sup>Y el Verbo se hizo hombre y habit&oacute; entre nosotros. Y hemos contemplado su gloria, la gloria que corresponde al Hijo unig&eacute;nito del Padre, lleno de gracia y de verdad.</span></span></p>
	<span><span> <!-- end bible --> </span></span></div>
	<span><span> nacida como un ni&ntilde;o, Jes&uacute;s de Nazaret. Vino de la eternidad y entr&oacute; en el tiempo y en el espacio. Entr&oacute; en una familia, una cultura, un pueblo, una tribu y vivi&oacute; la vida un d&iacute;a a la vez en el siglo I romano controlado Israel. </span></span></li>
</ul>

<p class="MsoBodyText" style="text-align:justify"><span><span>Aunque plenamente Dios, eligi&oacute; vivir Su vida como plenamente hombre, en total obediencia entregada a Su Padre celestial. Lo que &Eacute;l logr&oacute; en Su vida y ministerio, lo logr&oacute; como el hombre de Nazaret, el Hijo del Hombre, a trav&eacute;s del poder y la presencia del Esp&iacute;ritu Santo en cumplimiento de la voluntad del Padre. Aunque &Eacute;l ten&iacute;a todo el derecho de operar fuera de su divinidad, &Eacute;l eligi&oacute; vivir s&oacute;lo de Su perfecta humanidad sin pecado para ser nuestro ejemplo de c&oacute;mo glorificar completamente a Dios en nuestra vida y ministerio. </span></span></p>

<ul>
	<li class="nobreak-final-final" style="text-align:justify"><span><span>Jes&uacute;s fue y siempre ser&aacute; plenamente Dios. Aunque ten&iacute;a toda la autoridad, el poder y los recursos del cielo a sus &oacute;rdenes, nunca lo us&oacute;. En cambio, &Eacute;l eligi&oacute; &quot;llegar a ser como sus hermanos en todos los sentidos&quot; (<span class="popup-link" @click = "popUp('pop3')"> Hebreos 2:17</span>)&nbsp;</span></span>

	<div class="popup invisible" id="pop3"><span><span><!-- begin bible --> </span></span>

	<p><span><span><sup class="versenum">17&nbsp;</sup>Por eso era preciso que en todo se asemejara a sus hermanos, para ser un sumo sacerdote fiel y misericordioso al servicio de Dios, a fin de expiar los pecados del pueblo. </span></span></p>
	<span><span> <!-- end bible --> </span></span></div>
	<span><span>&nbsp;pero sin pecado. Debido a esto, el libro de Hebreos nos anima, &quot;Por lo tanto, hermanos santos, que comparten el llamado celestial, fijen sus pensamientos en Jes&uacute;s, el ap&oacute;stol y sumo sacerdote a quien confesamos&quot;. (<span class="popup-link" @click = "popUp('pop4')"> Hebreos 3:1</span>)</span></span>

	<div class="popup invisible" id="pop4"><span><span><!-- begin bible --> </span></span>

	<p><span><span><sup class="versenum">1 </sup>Por lo tanto, hermanos, ustedes que han sido santificados y que tienen parte en el mismo llamamiento celestial, consideren a Jes&uacute;s, ap&oacute;stol y sumo sacerdote de la fe que profesamos. </span></span></p>
	<span><span> <!-- end bible --> </span></span></div>
	</li>
</ul>

<p class="MsoBodyText" style="text-align:justify"><span><span>Los cuatro escritores del Evangelio registran un resumen de Su vida y ense&ntilde;anzas. Al estudiar su testimonio escrito, podemos aprender acerca del desarrollo de Su movimiento. En Su humanidad, incluso Jes&uacute;s estaba sujeto al tiempo y al espacio y viv&iacute;a en la secuencia de horas, d&iacute;as, semanas, a&ntilde;os. &Eacute;l inici&oacute; y desarroll&oacute; Su movimiento en el tiempo. Por lo tanto, el estudio de caso de Jes&uacute;s es muy instructivo para los l&iacute;deres. Obtenemos una visi&oacute;n de c&oacute;mo su vida y movimiento se desarrollaron a lo largo del tiempo mediante la reconstrucci&oacute;n de una secuencia cronol&oacute;gica a partir de la evidencia proporcionada por los Evangelios. </span></span></p>

<ul>
	<li class="nobreak-final-final" style="text-align:justify"><span><span>Lucas nos dice que trat&oacute; de proporcionar un &quot;relato ordenado&quot; bien investigado y ordenado de la vida de Jes&uacute;s (<span class="popup-link" @click = "popUp('pop5')"> Lucas 1:1-4</span>).</span></span>

	<div class="popup invisible" id="pop5"><span><span><!-- begin bible --> </span></span>

	<p><span><span><sup class="versenum">1 </sup>Muchos han intentado hacer un relato de las cosas que se han cumplido entre nosotros,<sup class="versenum">2&nbsp;</sup>tal y como nos las transmitieron los que desde el principio fueron testigos presenciales y servidores de la palabra.<sup class="versenum">3&nbsp;</sup>Por lo tanto, yo tambi&eacute;n, excelent&iacute;simo Te&oacute;filo, habiendo investigado todo esto con esmero desde su origen, he decidido escrib&iacute;rtelo ordenadamente,<sup class="versenum">4&nbsp;</sup>para que llegues a tener plena seguridad de lo que te ense&ntilde;aron.</span></span></p>
	<span><span> <!-- end bible --> </span></span></div>
	<span><span>&nbsp;Los otros escritores no se preocuparon por el orden de los eventos, sino que organizaron sus relatos en torno a temas. Por ejemplo, Juan, el &uacute;ltimo de los cuatro en escribir su evangelio, registr&oacute; una gran cantidad de material nuevo que llena algunos de los vac&iacute;os en el tiempo, especialmente el primer a&ntilde;o y medio (Juan 1-4) y las &uacute;ltimas semanas (Juan 12-21) de la vida terrenal y el ministerio de Jes&uacute;s. &iexcl;De hecho, Juan 13-20 cubre s&oacute;lo tres d&iacute;as! </span></span></li>
</ul>

<p class="MsoBodyText" style="text-align:justify"><span><span>&nbsp;El Evangelio de Lucas nos da algunos marcadores de fecha para que podamos localizar a Jes&uacute;s en un contexto hist&oacute;rico. </span></span></p>

<p class="MsoBodyText" style="text-align:justify"><span><span><em><sup>1</sup></em><em>Muchos se han comprometido a hacer un relato de las cosas que se han cumplido entre nosotros, </em>&nbsp;<em><sup>2</sup>tal como nos las transmitieron aquellos que desde el principio fueron testigos presenciales y siervos de la palabra.</em> <em><sup>3</sup>Con esto en mente, ya que yo mismo he investigado cuidadosamente todo desde el principio, yo tambi&eacute;n decid&iacute; escribir un relato ordenado para ti, el m&aacute;s excelente Te&oacute;filo, </em>&nbsp;<em><sup>4</sup></em>para <em>que puedas conocer la certeza de las cosas que te han ense&ntilde;ado.</em> <em>&ndash; Lucas 1:1-4.</em></span></span></p>

<ul>
	<li class="nobreak-final-final"><span lang="es"><span><span>Lucas nos dice que Jes&uacute;s naci&oacute; durante el reinado del rey Herodes [el Grande] (<span class="popup-link" @click = "popUp('pop6')"> Lucas 1:5</span>),&nbsp;</span></span></span>

	<div class="popup invisible" id="pop6"><span lang="es"><span><span><!-- begin bible --> </span></span></span>

	<p><span lang="es"><span><span><sup class="versenum">5&nbsp;</sup>En tiempos de Herodes, rey de Judea, hubo un sacerdote llamado Zacar&iacute;as, miembro del grupo de Ab&iacute;as. Su esposa Elisabet tambi&eacute;n era descendiente de Aar&oacute;n. </span></span></span></p>
	<span lang="es"><span><span> <!-- end bible --> </span></span></span></div>
	<span lang="es"><span><span>&nbsp;durante el reinado de C&eacute;sar Augusto (<span class="popup-link" @click = "popUp('pop7')"> Lucas 2:1-7</span>)&nbsp;</span></span></span>

	<div class="popup invisible" id="pop7"><span lang="es"><span><span><!-- begin bible --> </span></span></span>

	<p><span lang="es"><span><span><sup class="versenum">1 </sup>Por aquellos d&iacute;as Augusto C&eacute;sar decret&oacute; que se levantara un censo en todo el Imperio romano.<sup class="versenum">2&nbsp;</sup>(Este primer censo se efectu&oacute; cuando Cirenio gobernaba en Siria).<sup class="versenum">3&nbsp;</sup>As&iacute; que iban todos a inscribirse, cada cual a su propio pueblo.</span></span></span></p>
	<span lang="es"><span><span> </span></span></span>

	<p><span lang="es"><span><span><sup class="versenum">4&nbsp;</sup>Tambi&eacute;n Jos&eacute;, que era descendiente del rey David, subi&oacute; de Nazaret, ciudad de Galilea, a Judea. Fue a Bel&eacute;n, la Ciudad de David,<sup class="versenum">5&nbsp;</sup>para inscribirse junto con Mar&iacute;a su esposa. Ella se encontraba encinta<sup class="versenum">6&nbsp;</sup>y, mientras estaban all&iacute;, se le cumpli&oacute; el tiempo.<sup class="versenum">7&nbsp;</sup>As&iacute; que dio a luz a su hijo primog&eacute;nito. Lo envolvi&oacute; en pa&ntilde;ales y lo acost&oacute; en un pesebre, porque no hab&iacute;a lugar para ellos en la posada.</span></span></span></p>
	<span lang="es"><span><span> <!-- end bible --> </span></span></span></div>
	<span lang="es"><span><span>&nbsp;y mientras Quirinio era gobernador de Siria (<span class="popup-link" @click = "popUp('pop8')"> Lucas 2:2</span>).&nbsp;</span></span></span>

	<div class="popup invisible" id="pop8"><span lang="es"><span><span><!-- begin bible --> </span></span></span>

	<p><span lang="es"><span><span><sup class="versenum">2&nbsp;</sup>(Este primer censo se efectu&oacute; cuando Cirenio gobernaba en Siria). </span></span></span></p>
	<span lang="es"><span><span> <!-- end bible --> </span></span></span></div>
	<span lang="es"><span><span>&nbsp;Tambi&eacute;n afirma que Jes&uacute;s comenz&oacute; su ministerio durante el 15&ordm; reinado de Tiberio C&eacute;sar (Lucas 3:1-2) y que Jes&uacute;s ten&iacute;a unos 30 a&ntilde;os cuando comenz&oacute; (<span class="popup-link" @click = "popUp('pop9')"> Lucas 3:21-23</span>).&nbsp;</span></span></span>

	<div class="popup invisible" id="pop9"><span lang="es"><span><span><!-- begin bible --></span></span></span>

	<div>
	<p><span lang="es"><span><span><sup class="versenum">21&nbsp;</sup>Un d&iacute;a en que todos acud&iacute;an a Juan para que los bautizara, Jes&uacute;s fue bautizado tambi&eacute;n. Y mientras oraba, se abri&oacute; el cielo,<sup class="versenum">22&nbsp;</sup>y el Esp&iacute;ritu Santo baj&oacute; sobre &eacute;l en forma de paloma. Entonces se oy&oacute; una voz del cielo que dec&iacute;a: &laquo;T&uacute; eres mi Hijo amado; estoy muy complacido contigo&raquo;.</span></span></span></p>

	<p><span lang="es"><span><span><sup class="versenum">23&nbsp;</sup>Jes&uacute;s ten&iacute;a unos treinta a&ntilde;os cuando comenz&oacute; su ministerio. Era hijo, seg&uacute;n se cre&iacute;a, de Jos&eacute;,</span></span></span></p>

	<p><span lang="es"><span><span>hijo de El&iacute;, </span></span></span></p>
	</div>
	<span lang="es"><span><span> <!-- end bible --> </span></span></span></div>
	<span lang="es"><span><span>&nbsp;Esto es importante porque nos ayuda a aprender m&aacute;s acerca de cu&aacute;ndo y cu&aacute;nto tiempo Jes&uacute;s hizo su ministerio. Podemos comenzar a ver los pasos que tom&oacute; para sentar las bases para la formaci&oacute;n de disc&iacute;pulos, el desarrollo de sus seguidores en hacedores de disc&iacute;pulos y, con el tiempo, equipar a los hacedores de disc&iacute;pulos probados para convertirse en l&iacute;deres de movimientos multiplicadores.</span></span></span></li>
</ul>


<button id="MC2/spa/video/multiply2/2intro.mp4" type="button" class="external-movie">
         Mira &nbsp;Desarrollando l&iacute;deres para la multiplicaci&oacute;n&nbsp;</button>
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

			<td class="social" @click="share('lesson', 'Ser como Jesús: El modelo del Reino: ', '/content/M2/spa/multiply2/multiply2intro.html')">
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