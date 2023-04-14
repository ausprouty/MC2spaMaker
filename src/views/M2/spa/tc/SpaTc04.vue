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
    <div class="nav full internal-link" @click="this.pageGoBack('spa-tc-index')">
        <img src="@/assets/sites/mc2/images/ribbons/mc2back.png" class="nav full" />
    </div>
</div>
<div class="page_content ltr">
<div class="block ltr">
                        <div class="chapter_number ltr"><h1>4.</h1></div>
                        <div class="chapter_title ltr"><h1>¿CÓMO  CAMINAR EN  EL ESPÍRITU  SANTO?</h1></div>
                    </div>
<div id="showVideoOptions"></div>
  
    <button id="MC2/spa/audio/tc/CT 4.mp3" type="button" class="external-audio">
        Escuchar &nbsp;"&iquest;C&Oacute;MO CAMINAR EN EL ESP&Iacute;RITU SANTO?"&nbsp;</button>
        <div class="collapsed"></div>
    

<!-- begin default revealSummary -->
<div id="Summary0" class="summary"><h2>+ EXPERIMENTANDO LA AVENTURA</h2></div>
<div class="collapsed" id ="Text0">
<!-- end default revealSummary -->
<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc4-1.png" style="float:right; width:50%" />Un m&eacute;dico bastante emocionado, se acerc&oacute; a m&iacute; al finalizar la capacitaci&oacute;n. Se ve&iacute;a que rebosaba de gozo y entusiasmo.</p>

<p>&ldquo;&iexcl;Desde que aprend&iacute; c&oacute;mo ser lleno del Esp&iacute;ritu Santo y a caminar en su poder, la vida cristiana se ha vuelto una gran aventura para m&iacute;!&rdquo; exclam&oacute;. &ldquo;Ahora quiero que todos experimenten esta misma aventura con Cristo.&rdquo;</p>

<p>&iquest;Le gustar&iacute;a disfrutar como este hombre y vivir lo que millones de otros cristianos ya han experimentado? Usted tambi&eacute;n puede conocer la aventura de una vida en Cristo abundante, con prop&oacute;sito y llena de fruto.</p>

<p>Si ha estado viviendo en fracaso espiritual, sin poder y sin frutos, pregunt&aacute;ndose si la vida cristiana vale la pena, hay esperanza para usted. &iquest;Qu&eacute; mejor promesa podr&iacute;a ofrecer Cristo a los cristianos, que la seguridad de poder caminar diariamente en el poder del Esp&iacute;ritu Santo, el Esp&iacute;ritu de Jesucristo, y experimentar una vida abundante y fruct&iacute;fera de prop&oacute;sito y aventura? Esta es la promesa.</p>

<div class="bible">Ciertamente les aseguro que el que cree en m&iacute; las obras que yo hago tambi&eacute;n &eacute;l las har&aacute;, y aun las har&aacute; mayores, porque yo vuelvo al Padre. Cualquier cosa que ustedes pidan en mi nombre, yo la har&eacute;; as&iacute; ser&aacute; glorificado el Padre en el Hijo. Lo que pidan en mi nombre, yo lo har&eacute;.</div>

<p>Cuando ciertas verdades espirituales b&aacute;sicas se comprenden y experimentan por fe, trae beneficios espirituales revolucionarios. Estos principios comprobados pueden ayudarlo a ser m&aacute;s consistente en su caminar con Dios y a ser m&aacute;s efectivo en su testificar sobre nuestro querido Salvador.</p>

<p>La vida cristiana, entendida de forma apropiada, no es compleja ni dif&iacute;cil. En realidad la vida cristiana es muy sencilla. Tan sencilla que nos asombramos de su sencillez, sin embargo, es a la vez tan dif&iacute;cil que nadie puede vivirla.</p>

<p>Esta paradoja se debe a que la vida cristiana es una vida sobrenatural. El &uacute;nico que puede ayudarnos a vivir esta vida abundante, es el Se&ntilde;or Jesucristo, quien nos capacita por medio de Su Esp&iacute;ritu Santo.</p>

<p>El secreto es algo llamado Respiraci&oacute;n Espiritual.</p>

<p>Una de las verdades m&aacute;s importantes de la Biblia, cuya comprensi&oacute;n y aplicaci&oacute;n ha enriquecido mi vida m&aacute;s que ninguna otra, es un concepto al que me gusta llamar &ldquo;Respiraci&oacute;n Espiritual.&rdquo; Este concepto ha sido compartido con millones de personas, con resultados revolucionarios. A trav&eacute;s de nuestra literatura y varias conferencias y seminarios de capacitaci&oacute;n.</p>

<p>Conforme usted camine en el Esp&iacute;ritu por fe, practicando la Respiraci&oacute;n Espiritual, nunca m&aacute;s vivir&aacute; en fracaso espiritual. La Respiraci&oacute;n Espiritual, as&iacute; como la respiraci&oacute;n f&iacute;sica, es el proceso de exhalar lo impuro e inhalar lo puro, un ejercicio en fe, que lo capacita para experimentar el amor y el perd&oacute;n de Dios, para caminar en el Esp&iacute;ritu como un h&aacute;bito de vida.</p>

<p>Cuando usted invit&oacute; a Cristo en su vida como Salvador y Se&ntilde;or, experiment&oacute; un nacimiento espiritual. Se convirti&oacute; en un hijo de Dios y recibi&oacute; la llenura del Esp&iacute;ritu Santo. Dios perdon&oacute; sus pecados (pasados, presentes y futuros), haci&eacute;ndolo justo, santo y aceptable a Sus ojos debido al sacrificio de Cristo en la cruz. Usted recibi&oacute; el poder para vivir una vida santa y para ser un testigo fruct&iacute;fero de Dios.</p>

<p>Pero el cristiano promedio no entiende este concepto de la Respiraci&oacute;n Espiritual como un ejercicio de fe, y como resultado, vive en una monta&ntilde;a rusa espiritual. El va de una experiencia emocional a otra, viviendo la mayor parte de su vida como un cristiano mundano, controlando su propia vida, frustrado y sin fruto.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc4-2.png" style="float:right; width:50%" />Si &eacute;sta es su experiencia, la Respiraci&oacute;n Espiritual le permitir&aacute; escapar de esta monta&ntilde;a rusa emocional, y disfrutar de la vida cristiana que le Se&ntilde;or Jes&uacute;s le prometi&oacute; cuando dijo, &ldquo;Yo he venido para que tengan vida y la tengan en abundancia.&rdquo; Como un ejercicio de fe, la respiraci&oacute;n espiritual le permitir&aacute; continuar experimentado el amor y perd&oacute;n de Dios, y el poder y control del Esp&iacute;ritu Santo como una forma de vida.</p>

<p>Si usted peca mediante un acto deliberado de desobediencia, respire espiritualmente. Exhale por medio de la confesi&oacute;n. La Palabra de Dios promete en 1 Juan 1:9, &ldquo;Si confesamos nuestros pecados, Dios es fiel y justo para perdonar nuestros pecados y limpiarnos de toda maldad.&rdquo; En griego, el lenguaje original del Nuevo Testamento, la palabra confesar (homologeo) significa &ldquo;estar de acuerdo&rdquo; o &ldquo;decir lo mismo.&rdquo; Este acuerdo involucra al menos tres consideraciones.</p>

<p><strong>Primero,</strong> sea consciente de que su o sus pecados (los cuales deben mencion&aacute;rselos a Dios de modo espec&iacute;fico), son algo malo y por lo tanto desagradables a &Eacute;l.</p>

<p><strong>Segundo</strong>, sea consciente de que Dios ya le ha perdonado sus pecados por medio de la muerte de Cristo en la cruz.</p>

<p><strong>Tercero,</strong> arrepi&eacute;ntase, lo que significa, cambiar su actitud hacia su pecado. El poder del Esp&iacute;ritu Santo le permitir&aacute; cambiar tanto su actitud como su conducta. En lugar de hacer lo que su naturaleza pecaminosa (su carne), quiere hacer, usted puede hacer lo que Dios quiere que haga.</p>

<p>Ahora inhale apropi&aacute;ndose de la llenura del Esp&iacute;ritu Santo de Dios por fe. Conf&iacute;e en que &Eacute;l le dar&aacute; poder seg&uacute;n su mandato &ldquo;sean llenos del Esp&iacute;ritu&rdquo; lo que en realidad significa ser controlado y dirigido constante y continuamente por el Esp&iacute;ritu Santo.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc4-3.png" style="width:100%" /></p>

<p>De acuerdo a su promesa, Dios lo oye y le concede lo que pide porque usted ora de acuerdo a su voluntad.</p>

<p>Yo le animo a continuar pidiendo Su amor, perd&oacute;n y poder por fe, y a continuar en comuni&oacute;n con &Eacute;l, momento a momento.</p>

<p>Usted puede salir de su monta&ntilde;a rusa espiritual, dejar de ser un cristiano mundano o carnal, y ser un creyente lleno del Esp&iacute;ritu por medio de la Respiraci&oacute;n Espiritual. Si usted est&aacute; respirando espiritualmente, exhalando su pecado mediante la confesi&oacute;n e inhalando al apropiarse de la llenura del Esp&iacute;ritu Santo por fe, usted es un cristiano lleno del Esp&iacute;ritu.</p>

<p>Usted se convierte otra vez en un cristiano mundano cuando desarrolla (desde ese momento) una actitud de incredulidad - cuando predispone su coraz&oacute;n a no creer en la promesa de <strong>1 Juan 1:9 y 1 Corintios 10:13</strong>:</p>

<div class="bible">Ustedes no han sufrido ninguna tentaci&oacute;n que no sea com&uacute;n al g&eacute;nero humano. Pero Dios es fiel, y no permitir&aacute; que ustedes sean tentados m&aacute;s all&aacute; de lo que puedan aguantar. M&aacute;s bien, cuando llegue la tentaci&oacute;n, &eacute;l les dar&aacute; tambi&eacute;n una salida a fin de que puedan resistir.</div>

<p>Usted no se vuelve carnal simplemente por cometer un pecado o una docena o cientos de pecados, si es que con sinceridad contin&uacute;a respirando espiritualmente. Usted se vuelve mundano solamente cuando desarrolla una actitud de incredulidad y rechaza la Respiraci&oacute;n Espiritual.</p>

<p>Ahora usted puede saber que est&aacute; lleno del Esp&iacute;ritu Santo. Por medio de la Respiraci&oacute;n Espiritual, usted puede vivir seguro de su llenura. Simplemente mantenga cuentas cortas con Dios. No permita que el pecado se acumule.</p>

<p>Si usted trata de vivir la vida cristiana por sus propios esfuerzos carnales, &eacute;sta se volver&aacute; compleja, dif&iacute;cil e inclusive imposible de vivir. Pero cuando invita al Se&ntilde;or Jesucristo a dirigir su vida; cuando por fe sabe que usted ha sido crucificado con Cristo y ha resucitado con &Eacute;l y esto se constituye en una realidad cada d&iacute;a; cuando camina en la luz como Dios est&aacute; en la luz, en la llenura y el poder del Esp&iacute;ritu Santo, el Se&ntilde;or sencillamente vive Su vida abundante en usted, en todo el poder de su resurrecci&oacute;n.</p>

<p>No estoy sugiriendo que el cristiano que camina en la llenura del Esp&iacute;ritu Santo no tiene dificultades. Tambi&eacute;n tiene problemas de salud, p&eacute;rdida de seres queridos, necesidades financieras y otras experiencias similares a las de la mayor&iacute;a de las personas.</p>

<p>Sin embargo, muchas de nuestras desgracias son provocadas por nuestras propias acciones ego&iacute;stas y mundanas. La persona espiritual tambi&eacute;n est&aacute; expuesta a la mayor&iacute;a de estos sufrimientos provocados por s&iacute; misma. Pero cuando el problema viene, la persona espiritual puede enfrentarlos con una actitud de calma y confianza porque conoce los recursos de Dios que est&aacute;n disponibles para quien se enfrenta a la adversidad.</p>

<p>No se trata simplemente del pensamiento positivo. Nosotros somos instruidos a dejarle nuestras preocupaciones al Se&ntilde;or Jes&uacute;s, porque &Eacute;l tiene cuidado de nosotros. La persona espiritual conoce la fidelidad de Dios por experiencia. El Se&ntilde;or es quien soluciona los problemas. Las pruebas y las cargas de este mundo no son tan grandes cuando &Eacute;l es quien est&aacute; llevando todo el peso.</p>

<p>El ap&oacute;stol Pablo hab&iacute;a experimentado esto momento a momento:</p>

<div class="bible">Estoy crucificado con Cristo, y ya no vivo yo, es Cristo quien vive en m&iacute;. Y esta vida que ahora tengo la vivo por mi fe en el Hijo de Dios, quien me am&oacute; y se entreg&oacute; por m&iacute;.</div>

<p>En toda vida hay un trono, un centro de control, la intersecci&oacute;n del intelecto, la voluntad y las emociones de una persona. En el trono est&aacute; el yo o Cristo. Perm&iacute;tame ilustrarlo.</p>

<p>Me gusta planificar por adelantado todo lo que sea posible, en especial los eventos importantes. Sin embargo, a menudo estoy tan ocupado con los muchos detalles de nuestro ministerio mundial que algo importante se me puede escapar.</p>

<p>Apenas faltaban dos semanas para una conferencia clave, cuando me di cuenta que necesitaba una serie de materiales impresos que ser&iacute;an de gran beneficio para los asistentes.</p>

<p>Cuando compart&iacute; la urgencia con el director del departamento responsable por esta necesidad, &eacute;l me respondi&oacute;, &ldquo;Bill, ahora ya estamos copados. Dos semanas no es tiempo suficiente.&rdquo;</p>

<p>Yo me impaciente. &iquest;Acaso no se daba &eacute;l cuenta que estamos en una batalla para ganar las almas de las personas, y que por lo tanto debemos aprovechar todas las oportunidades que surjan y no limitar nuestros esfuerzos s&oacute;lo al horario diario de trabajo? Le aclar&eacute; a &eacute;l mi posici&oacute;n.</p>

<p>&ldquo;Pero si nosotros tuvi&eacute;ramos m&aacute;s tiempo...&rdquo; protest&oacute;. &ldquo;Ahora no hay forma de que podamos realizar un trabajo tan grande en tan poco tiempo. Hay que escribir, hacer el dise&ntilde;o, pasarlo en limpio, hacer las gr&aacute;ficas, luego la impresi&oacute;n&rdquo;</p>

<p>Parec&iacute;a obvio que &eacute;l no compart&iacute;a mi carga por el pr&oacute;ximo evento. Yo insist&iacute; en mi punto. &ldquo;Mira, &eacute;sta es una conferencia internacional muy importante,&rdquo; le dije firmemente, elevando el tono de mi voz. &ldquo;Y &eacute;ste no es el momento de excusas. Por favor encuentra una forma de terminar este proyecto a tiempo para la conferencia, aunque sea trabajando fuera de horario.&rdquo;</p>

<p>Yo pude ver que mi colega estaba frustrado. Pero razon&eacute;: Nosotros necesitamos estos materiales impresos. Sea como sea, los necesitamos y pronto.</p>

<address>Momentos despu&eacute;s de nuestra conversaci&oacute;n, sent&iacute; la convicci&oacute;n del Esp&iacute;ritu Santo.</address>

<address>&nbsp;</address>

<p>Momentos despu&eacute;s de nuestra conversaci&oacute;n, sent&iacute; la convicci&oacute;n del Esp&iacute;ritu Santo. S&iacute;, a&uacute;n en nuestro servicio bien intencionado para el Se&ntilde;or, nosotros podemos tropezar, y a nombre de la santidad yo hab&iacute;a ofendido a un muy querido hermano en Cristo. Yo hab&iacute;a fallado al no reconocer que &eacute;l y su equipo posiblemente ten&iacute;an raz&oacute;n, no hab&iacute;a tenido en cuenta la dura carga de trabajo que ya estaban enfrentando cada d&iacute;a. En vez de pedirle que pensara conmigo en las posibilidades y ayudarlo a reorganizar sus prioridades para acomodar la nueva tarea, le hab&iacute;a ordenado hacer el trabajo mostr&aacute;ndole poco aprecio por las muchas noches que su equipo hab&iacute;a dedicado a su trabajo. Yo hab&iacute;a reaccionado con impaciencia, en vez de hacerlo con un esp&iacute;ritu de amor y comprensi&oacute;n por su trabajo de equipo.</p>

<p>En este punto ten&iacute;a que tomar una decisi&oacute;n. Por un lado, pod&iacute;a irme. Despu&eacute;s de todo, &iquest;Acaso la cabeza de una organizaci&oacute;n grande no tiene el derecho de exigir proyectos cuando sea necesario? &iquest;Acaso el fin (la estrat&eacute;gica conferencia internacional) no justifica los medios (lograr el trabajo sin importar lo que cueste)? &iquest;Y acaso la actitud insegura de mi asociado no justificaba una conversaci&oacute;n severa sobre la urgencia de la hora?</p>

<p>Humanamente hablando, yo pod&iacute;a haber justificado mi actuaci&oacute;n, permitiendo que el incidente pasara. Pero no tendr&iacute;a descanso ni paz mientras el Esp&iacute;ritu Santo continuar&aacute; se&ntilde;al&aacute;ndome el pecado. Dios no habr&iacute;a bendecido mis esfuerzos por agradarlo, en tanto este pecado permaneciera sin confesar. Adem&aacute;s, algunos de mis amados compa&ntilde;eros de trabajo, habr&iacute;an continuado dolidos como resultado de mi actitud insensible.</p>

<p>Por otro lado, yo tambi&eacute;n ten&iacute;a la opci&oacute;n de tratar al problema tomando una acci&oacute;n b&iacute;blica para solucionarlo. La inquietud en mi conciencia era el Esp&iacute;ritu Santo examin&aacute;ndome mientras yo trataba de justificar mi conducta. Aquello que yo consideraba como un liderazgo eficaz, &Egrave;l me lo estaba mostrando como pecados injustificados de impaciencia y enojo.</p>

<p>Yo sab&iacute;a que tomar una acci&oacute;n b&iacute;blica era la &uacute;nica elecci&oacute;n que agradar&iacute;a a mi Se&ntilde;or. Por eso, yo le confes&eacute; mi pecado y me apropi&eacute; de su perd&oacute;n.</p>

<p>Luego vino la parte m&aacute;s dif&iacute;cil.</p>

<p>Me dirig&iacute; a la oficina donde trabajaba mi asociado y su equipo y les ped&iacute; perd&oacute;n. Nosotros lloramos, re&iacute;mos y oramos juntos, sintiendo un fluir fresco del amor de Dios en medio nuestro. Luego hablamos de nuestras necesidades mutuas y encontramos un modo (como compa&ntilde;eros de equipo) de reorganizar el trabajo y cumplir la tarea (a tiempo).</p>

<p>De eso se trata la vida cristiana, simplemente de mantener a Dios en el trono. Usted hace esto cuando camina controlado y dirigido por el Esp&iacute;ritu Santo, porque el Esp&iacute;ritu Santo vino con el prop&oacute;sito expreso de glorificar a Cristo, haciendo posible que el creyente viva una vida santa y sea un testigo fruct&iacute;fero de nuestro Salvador amado.</p>

<p>Como he mencionado previamente, para estar seguro de estar lleno del Esp&iacute;ritu Santo, usted necesita recordar dos palabras importantes: mandato y promesa. El mandato se encuentra en Efesios 5:18,</p>

<div class="bible">No se emborrachen, pues perder&aacute;n el control de sus actos. M&aacute;s bien, &laquo; permitan que sea el Esp&iacute;ritu Santo quien los llene y los controle.</div>

<p>Y la promesa se fundamenta en 1 Juan 5:14,15:</p>

<div class="bible">Y estamos seguros de que &eacute;l nos escuchar&aacute; cuando le pidamos algo que est&eacute; de acuerdo con su voluntad. Y si sabemos que &eacute;l nos oye cuando le hablamos y cuando le presentamos nuestras peticiones, podemos estar seguros de que nos contestara.</div>

<p>Bas&aacute;ndose en la autoridad del mandato de Dios, usted sabe que est&aacute; orando de acuerdo a Su voluntad cuando le pide que lo llene, que lo controle y lo dirija. Por lo tanto, usted puede estar seguro que &Eacute;l lo llenar&aacute; y dirigir&aacute;, bas&aacute;ndose en su mandato y en su promesa, siempre que usted desee sinceramente ser lleno y que conf&iacute;e en que &Eacute;l lo llenar&aacute;.</p>

<p>Recuerde que si usted es creyente, el Esp&iacute;ritu Santo ya est&aacute; morando en usted. Usted no tiene que pedirle que entre en su vida; &Eacute;l ya est&aacute; morando en usted. Su cuerpo es un templo de Dios desde el momento en que se hizo cristiano. Por lo tanto, usted simplemente le dice, &ldquo;Yo te rindo mi vida, y por fe me apropio de Tu llenura y poder.&rdquo;</p>

<p>Luego, contin&uacute;e respirando espiritualmente, exhalando cada vez que el Esp&iacute;ritu Santo le revele qu&eacute; necesita confesar, e inhalando mientras camina en la llenura y el control del Esp&iacute;ritu por fe. Algunos cristianos aprenden a respirar espiritualmente m&aacute;s pronto y m&aacute;s a menudo que otros.</p>

<p>Los sentimientos no son confiables, no dependa de los sentimientos. Estos est&aacute;n ligados a sus circunstancias siempre cambiantes, y no son confiables para evaluar su relaci&oacute;n con Dios. La autoridad final la tienen las promesas invariables de la Palabra de Dios, no sus sentimientos. El cristiano debe vivir por fe, confiando en la fidelidad de Dios y Su Palabra. Un tren es una buena ilustraci&oacute;n de la relaci&oacute;n entre los hechos, la fe y los sentimientos.</p>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc4-4.png" style="width:100%" /></p>

<p>Llamemos &ldquo;hecho&rdquo; a la m&aacute;quina del tren, la realidad de la promesa de Dios se basa en Su Palabra. Al vag&oacute;n de combustible lo llamaremos &ldquo;fe&rdquo;, usted conf&iacute;a en Dios y Su Palabra. Al vag&oacute;n de la cocina lo llamaremos &ldquo;sentimientos.&rdquo;</p>

<p>Conforme el combustible fluye dentro de la m&aacute;quina, el tren funciona. Ser&iacute;a in&uacute;til, y por supuesto rid&iacute;culo, intentar hacer andar el tren por el vag&oacute;n de la cocina. Del mismo modo, como cristiano, usted no deber&iacute;a depender de los sentimientos y las emociones para vivir una vida llena del Esp&iacute;ritu Santo. En vez de eso, Dios quiere que usted simplemente coloque su fe en Su fidelidad y en las promesas de Su Palabra.</p>

<p>Los sentimientos son como el vag&oacute;n cocinero, &eacute;stos son importantes, pero est&aacute;n dise&ntilde;ados para ir detr&aacute;s de una vida de fe y obediencia. Jes&uacute;s prometi&oacute; a todos los que le obedecen, &ldquo;El que tiene mis mandamientos, y los guarda, &eacute;se es el que me ama; y el que me ama, ser&aacute; amado por mi Padre, y yo le amar&eacute; y me manifestar&eacute; a &eacute;l.&rdquo;</p>

<p>Entonces, usted puede esperar mantener una relaci&oacute;n emocional v&aacute;lida con nuestro Se&ntilde;or si conf&iacute;a en &Eacute;l y le obedece. Pero nunca busqu&eacute; depender de los sentimientos o s&oacute;lo tener una experiencia emocional. El acto de buscar una experiencia emocional es ya una negaci&oacute;n del principio de fe y todo lo que no proviene de fe, es pecado.</p>

<p>Para resumir, usted puede saber que est&aacute; lleno del Esp&iacute;ritu Santo confiando en Dios - Su mandato y Su promesa , y puede vivir con esa seguridad.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary1" class="summary"><h2>+ PREP&Aacute;RESE PARA EL CONFLICTO ESPIRITUAL</h2></div>
<div class="collapsed" id ="Text1">
<!-- end default revealSummary -->
<p>La Biblia explica que hay tres grandes fuerzas - el mundo, la carne y el diablo, que constantemente batallan contra los creyentes. Observemos brevemente cada una de estas fuerzas.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary2" class="summary"><h3>+ 1. El mundo</h3></div>
<div class="collapsed" id ="Text2">
<!-- end default revealSummary -->
<p>Yo no conozco a nadie que ame este mundo y que haya sido usado por Dios de una manera significativa. El dinero y cualquier otro tipo de &eacute;xito material, no tiene nada de malo. Sin embargo, usted debe tener cautela con la influencia del materialismo. Usted debe colocar su afecto en Cristo y Su reino, no en las cosas materiales de este mundo. 1 Juan 2:15-17 advierte:</p>

<div class="bible">No amen al mundo ni lo que hay en &eacute;l. El que ama al mundo no ama al Padre, porque nada de lo que hay en el mundo &mdash;las pasiones sexuales, el deseo de poseer todo lo que agrada y el orgullo de poseer riquezas &mdash; proviene del Padre sino del mundo. Y el mundo se est&aacute; acabando y con &eacute;l todos sus malos deseos. Pero el que hace la voluntad de Dios permanece para siempre.</div>

</div>

<!-- begin default revealSummary -->
<div id="Summary3" class="summary"><h3>+ 2. La carne</h3></div>
<div class="collapsed" id ="Text3">
<!-- end default revealSummary -->
<p>La Palabra de Dios ense&ntilde;a que el cristiano espiritual debe estar preparado para batallar contra la carne. A lo largo de su vida usted tendr&aacute; conflictos. En ning&uacute;n momento estar&aacute; usted libre de tentaci&oacute;n. G&aacute;latas 5:17 dice:</p>

<div class="bible">La naturaleza pecaminosa desea hacer el mal, que es precisamente lo contrario de lo que quiere el Esp&iacute;ritu. Y el Esp&iacute;ritu nos da deseos que se oponen a lo que desea la naturaleza pecaminosa. Estas dos fuerzas luchan constantemente entre s&iacute;, entonces ustedes no son libres para llevar a cabo sus buenas intenciones</div>

<p>Todas las personas, sin importar su grado de madurez en Cristo, experimentan tentaci&oacute;n y tienen tendencia hacia el pecado. Sin embargo, hay una diferencia entre tentaci&oacute;n y pecado. La tentaci&oacute;n es la inclinaci&oacute;n inicial de hacer algo contrario a la voluntad de Dios. Tal inclinaci&oacute;n la tienen todos los hombres y mujeres, aunque trabajen para el Se&ntilde;or y aun cuando no hayan pecado. La tentaci&oacute;n se transforma en pecado cuando usted piensa en la tentaci&oacute;n y desarrolla un deseo carnal que a menudo es seguido por un acto de desobediencia.</p>

<p>Pero este conflicto se resuelve totalmente cuando usted, por un acto de su voluntad, se rinde bajo el control del Esp&iacute;ritu Santo y enfrenta esas tentaciones en Su poder. G&aacute;latas 5:16 dice: Vivan por el Esp&iacute;ritu, y no seguir&aacute;n los deseos de la naturaleza pecaminosa.</p>

<p>&iquest;C&oacute;mo puede hacer esto? En la vida pr&aacute;ctica y a diario reconozca su debilidad en el momento en que es tentado, y p&iacute;dale al Se&ntilde;or que se haga cargo del problema por usted. Cuando yo soy tentado, a menudo le recuerdo al Se&ntilde;or que yo le pertenezco y que necesito Su ayuda. Le pido que con Su sangre limpie mi mente de ciertos pensamientos y que me controle y dirija con el Esp&iacute;ritu Santo. De ese modo no me rindo a ninguna tentaci&oacute;n.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary4" class="summary"><h3>+ 3. El diablo</h3></div>
<div class="collapsed" id ="Text4">
<!-- end default revealSummary -->
<p>Satan&aacute;s es un enemigo real (no debemos equivocarnos en esto) sino que debemos estar preparados para el conflicto con &eacute;l. Debemos estar siempre alertas contra sus h&aacute;biles trucos y su astucia, as&iacute; como tambi&eacute;n reconocer sus claros intentos por hacernos fracasar y por destrozarnos. 1 Pedro 5:8-9 dice:</p>

<div class="bible">Practiquen el dominio propio y mant&eacute;nganse alerta. Su enemigo el diablo ronda como le&oacute;n rugiente, buscando a qui&eacute;n devorar. Res&iacute;stanlo, manteni&eacute;ndose firmes en la fe, sabiendo que sus hermanos &laquo; en todo el mundo est&aacute;n soportando la misma clase de sufrimiento</div>

<p>En una ocasi&oacute;n un joven ministro comparti&oacute; conmigo, &ldquo;Le tengo miedo al diablo.&rdquo;</p>

<p>Le dije, &ldquo;Deber&iacute;a temer a Satan&aacute;s si usted contin&uacute;a intentando controlar su propia vida. Pero si usted est&aacute; dispuesto a permitir que Dios la controle, usted no tiene que temer nada, porque la Biblia dice: Mayor es el que est&aacute; en vosotros que el que est&aacute; en el mundo.&rdquo;</p>

<p>&ldquo;Satan&aacute;s fue derrotado hace 2.000 a&ntilde;os,&rdquo; le expliqu&eacute;, &ldquo;cuando Cristo muri&oacute; en la cruz por nuestros pecados, cumpliendo las profec&iacute;as. Aunque Satan&aacute;s tenga gran poder e influencia sobre el hombre, &eacute;l tiene solamente el poder que Dios le ha permitido. Por eso es que al enfrentar la gran persecuci&oacute;n, los disc&iacute;pulos pudieron orar a Dios en Su soberan&iacute;a y poder,&rdquo; para hacer lo que tu mano y tu consejo hab&iacute;an antes determinado que hicieran.&rdquo;</p>

<p>Mi amigo ministro hab&iacute;a vivido en una ciudad donde se encontraba uno de los zool&oacute;gicos m&aacute;s grandes del mundo. Le pregunt&eacute;, &ldquo;&iquest;En su ciudad, qu&eacute; hacen con los leones?&rdquo;</p>

<p>El respondi&oacute;, &ldquo;Los enjaulamos.&rdquo;</p>

<p>Le dije, &ldquo;Eso es exactamente lo que Dios ha hecho con Satan&aacute;s. Visite la jaula en el zool&oacute;gico y observe al le&oacute;n pase&aacute;ndose impaciente de un lado a otro. &Eacute;l no puede hacerle da&ntilde;o a usted. Aunque se acerque mucho a la jaula, tampoco podr&aacute; herirlo si usted es cuidadoso. Pero si usted entra a la jaula el le&oacute;n lo devorar&aacute;. Usted no tiene nada que temer mientras permanezca fuera de la jaula.&rdquo;</p>

<p>&ldquo;De igual modo, usted no tiene nada que temer de Satan&aacute;s mientras dependa de Cristo y no de su propia fuerza. Recuerde, Satan&aacute;s no tiene poder excepto aquel que Dios en su sabidur&iacute;a le permite que tenga.&rdquo;</p>

<p>El ap&oacute;stol Pablo nos advierte, &ldquo;Vest&iacute;os de toda la armadura de Dios, para que pod&aacute;is estar firmes contra las asechanzas del diablo. Porque no tenemos lucha contra sangre y carne sino principados, contra potestades, contra los gobernadores de las tinieblas de este siglo, contra huestes espirituales de maldad en las regiones celestes.&rdquo;</p>

<p>Aunque Satan&aacute;s y las fuerzas de la oscuridad son enemigos peligrosos y usted debe estar alerta acerca del modo en que Satan&aacute;s trabaja, no debe tener miedo de &eacute;l, si su vida est&aacute; rendida al Se&ntilde;or&iacute;o de Cristo, si contin&uacute;a caminando en fe y en obediencia en el poder del Esp&iacute;ritu Santo. A pesar de que Satan&aacute;s es un experto en enga&ntilde;ar e inducir a los cristianos a desobedecer a Dios, usted no debe temerle. Recuerde, la Biblia dice, &ldquo;Mayor es el que est&aacute; en vosotros que el que est&aacute; en el mundo.&rdquo; Pero si usted contin&uacute;a siendo un cristiano mundano, tendr&aacute; que prepararse para enfrentar problemas reales en su vida personal, en su familia y en su iglesia. No hay un lugar m&aacute;s peligroso y vulnerable para un cristiano que vivir fuera de la perfecta voluntad de Dios como un cristiano mundano o carnal.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary5" class="summary"><h2>+ CONOZCA SUS RECURSOS COMO HIJO DE DIOS</h2></div>
<div class="collapsed" id ="Text5">
<!-- end default revealSummary -->
<p>Si usted quiere caminar en la llenura y el poder del Esp&iacute;ritu Santo, usted necesita conocer cu&aacute;l es su herencia espiritual. Usted debe saber c&oacute;mo apropiarse de los recursos inagotables del amor, sabidur&iacute;a, poder, perd&oacute;n y gracia abundante de Dios.</p>

<p>Es imposible caminar vigorosa y din&aacute;micamente en el Esp&iacute;ritu sin dedicar tiempo, un tiempo de quietud para estar en comuni&oacute;n con el Se&ntilde;or y su Palabra - en oraci&oacute;n y en estudio personal. Usted debe escuchar con atenci&oacute;n Su gu&iacute;a y consejo para sus actividades diarias y para testificar de Cristo.</p>

<p>Despu&eacute;s de muchos a&ntilde;os de trabajar con miles de cristianos, yo estoy convencido de que una persona no puede disfrutar la vida llena y abundante, que es nuestra herencia en Cristo, sin el equilibrio apropiado entre el estudio b&iacute;blico, la oraci&oacute;n y el presentar a Cristo a otros lo cual fluye en forma natural, de una vida obediente, llena del Esp&iacute;ritu.</p>

<p>Dios lo llama, no s&oacute;lo a experimentar personalmente esa gran aventura con Cristo, sino a compartir estas Buenas Nuevas con otros.</p>

<p>En este momento conviene hacer una advertencia. Usted es espiritual y experimenta el poder de Dios como un modo de vida, como resultado de la fe y &uacute;nicamente la fe. La Biblia ense&ntilde;a claramente que &ldquo;el justo por la fe vivir&aacute;.&rdquo; y &ldquo;Sin fe es imposible agradar a Dios.&rdquo; El practicar disciplinas y actividades espirituales, son el resultado de la fe. El estudio b&iacute;blico, la oraci&oacute;n, el testificar y la obediencia son vitalmente importantes, pero &eacute;stos deber&iacute;an ser considerados como con el resultado (el rebosar) de la vida de fe y no como un medio de fe, aunque la fe crece conforme usted ve la fidelidad de Dios, por medio de la comprensi&oacute;n de Su Palabra.</p>

<p>Pablo dice, &ldquo;Recuerden que su fortaleza debe venir del gran poder del Se&ntilde;or.&rdquo; Jesucristo, la expresi&oacute;n visible de Dios en quien mora toda la plenitud de la deidad, a quien se le ha dado toda autoridad en los cielos y en la tierra, vive en todos los que nos hemos hecho sus hijos por medio de la fe en Cristo. Usted no tiene ning&uacute;n poder en s&iacute; mismo. Usted debe depender totalmente del poder todopoderoso de la resurrecci&oacute;n de Jesucristo por medio del Esp&iacute;ritu Santo.</p>

<p>Como todo joven, primero en la universidad y posteriormente en los negocios, yo sol&iacute;a ser muy autosuficiente y me sent&iacute;a orgulloso de lo que pod&iacute;a lograr por m&iacute; mismo. Yo cre&iacute;a que un hombre pod&iacute;a hacer cualquier cosa que se propusiera en su propia fuerza, si estaba dispuesto a pagar el precio del sacrificio y el trabajo duro. Debo decir que experiment&eacute; cierto grado de &eacute;xito. Luego, cuando me hice cristiano, aprend&iacute; una nueva filosof&iacute;a de vida que era diametralmente opuesta a mi filosof&iacute;a anterior. Una vida de confianza en el poder de Dios, reemplaz&oacute; mi vieja costumbre de tratar de hacer las cosas en mis propias fuerzas.</p>

<p>Ahora me doy cuenta cu&aacute;n incapaz soy de vivir la vida cristiana , cu&aacute;n d&eacute;bil soy en mis propias fuerzas, pero cu&aacute;n fuerte soy en Cristo. Como Pablo dijo, &ldquo;Todo lo puedo en Cristo que me fortalece.&rdquo;</p>

<p>En Juan 15:4,5 el Se&ntilde;or enfatiza la importancia de obtener nuestra fuerza de &Eacute;l:</p>

<div class="bible">Permanezcan en m&iacute;, y yo permanecer&eacute; en ustedes. As&iacute; como ninguna rama puede dar fruto por s&iacute; misma, sino que tiene que permanecer en la vid, as&iacute; tampoco ustedes pueden dar fruto si no permanecen en m&iacute;. Yo soy la vid y ustedes son las ramas. El que permanece en m&iacute;, como yo en &eacute;l, dar&aacute; mucho fruto; separados de m&iacute; no pueden ustedes hacer nada</div>

<p>En sus propias fuerzas usted no puede hacer nada, es espiritualmente impotente y no da fruto. A&uacute;n como cristiano, usted es como una rama cortada de la vid si trata de vivir su propia vida. Pero si usted permanece en Cristo y Su Palabra permanece en usted, es Su poder el que se expresa a trav&eacute;s suyo y &Eacute;l lo capacita para vivir y testificar de &Eacute;l.</p>

<p>Jes&uacute;s explic&oacute; la importancia de ser un testigo fruct&iacute;fero, en Juan 15:8: &ldquo;En esto es glorificado mi Padre, en que llev&eacute;is mucho fruto, y se&aacute;is as&iacute; mis disc&iacute;pulos.&rdquo;</p>

<p>Yo nunca he guiado a nadie a Cristo y nunca lo har&eacute;, aunque he tenido el privilegio de orar con miles que han recibido a Cristo como resultado de mi tarea evangelizadora. El nuevo nacimiento es resultado de la obra del Esp&iacute;ritu Santo. Por lo tanto, yo no puedo jactarme por mucho el fruto ni desanimarme por el poco fruto. La responsabilidad de llevar frutos pertenece al Esp&iacute;ritu Santo, quien obra en y a trav&eacute;s m&iacute;o, produciendo fruto y cambiando las vidas de las personas. Mi papel es confiar y obedecer. Las palabras de un gran himno, &ldquo;Cuando Andemos con Dios&rdquo; (por John H. Sammis) expresan muy bien esto:</p>

<div class="bible">Cuando andemos con Dios, Escuchando su voz, Nuestra senda florida ser&aacute;; Si acatamos su ley, El ser&aacute; nuestro Rey; Y con &Eacute;l reinaremos all&aacute;. Obedecer, cumple a nuestro deber; Si quer&eacute;is ser felices, Deb&eacute;is obedecer.</div>

<p>Todo lo que Dios espera de usted es su disponibilidad, su confianza y su obediencia. El &eacute;xito en el testificar es simplemente compartir a Cristo en el poder del Esp&iacute;ritu Santo y dejarle los resultados a Dios. Pablo escribe:</p>

<div class="bible">No ceso de dar gracias por vosotros, haciendo memoria de vosotros en mis oraciones, para que el Dios de nuestro Se&ntilde;or Jesucristo, el Padre de gloria, os d&eacute; esp&iacute;ritu de sabidur&iacute;a y de revelaci&oacute;n en el conocimiento de &eacute;l, alumbrando los ojos de vuestro entendimiento, para que sep&aacute;is cu&aacute;l es la esperanza a que &eacute;l os ha llamado, y cu&aacute;les las riquezas de la gloria de su herencia en los santos, y cu&aacute;l la supereminente grandeza de su poder para con nosotros los que creemos, seg&uacute;n la operaci&oacute;n del poder de su fuerza, la cual oper&oacute; en Cristo, resucit&aacute;ndole de los muertos y sent&aacute;ndole a su diestra en los lugares celestiales, sobre todo principado y autoridad y poder y se&ntilde;or&iacute;o, y sobre todo nombre que se nombra, no s&oacute;lo en este siglo, sino tambi&eacute;n en el venidero; y someti&oacute; todas las cosas bajo sus pies, y lo dio por cabeza sobre todas las cosas a la iglesia, la cual es su cuerpo, la plenitud de Aquel que todo lo llena en todo.</div>

<p><img alt="" src="@/assets/sites/mc2/content/M2/spa/images/custom/tc4-5.png" style="float:right; width:50%" />El Se&ntilde;or Jes&uacute;s le encomend&oacute; a sus disc&iacute;pulos que<strong> vayan por todo el mundo</strong> y <strong>prediquen el Evangelio</strong>, prometiendo que estar&iacute;a siempre con ellos. Jes&uacute;s no les dijo, &ldquo;Vayan por el mundo y buena suerte.&rdquo; &Eacute;l dijo &ldquo;He aqu&iacute; yo estoy con vosotros todos los d&iacute;as, hasta el fin del mundo&rdquo;</p>

<p>Nuestro Salvador resucitado, el &uacute;nico a quien usted sirve, &iexcl;es el Dios omnipotente! El es Aquel de quien la Biblia dice:</p>

<div class="bible">Cristo es la imagen del Dios invisible, el primog&eacute;nito de toda creaci&oacute;n, porque en &eacute;l fueron creadas todas las cosas, las que hay en los cielos y las que hay en la tierra, visibles e invisibles; sean tronos, sean dominios, sean principados, sean potestades; todo fue creado por medio de &eacute;l y para &eacute;l, por cuanto agrad&oacute; al Padre que en &eacute;l habitase toda plenitud, en quien est&aacute;n escondidos todos los tesoros de la sabidur&iacute;a y del conocimiento. Mirad que nadie os enga&ntilde;e por medio de filosof&iacute;as y huecas sutilezas, seg&uacute;n las tradiciones de los hombres, conforme a los rudimentos del mundo, y no seg&uacute;n Cristo. Porque en &eacute;l habita corporalmente toda la plenitud de la Deidad, y vosotros est&aacute;is completos en &eacute;l, que es la cabeza de todo principado y potestad.</div>

<p>Si usted tiene a Cristo, tiene todo lo que necesita porque, como Pablo le escribe a la iglesia de Colosas, usted est&aacute; completo en &Eacute;l. &iquest;Necesita amor? Nuestro Se&ntilde;or es la encarnaci&oacute;n del amor. &iquest;Necesita gozo? El es gozo. &iquest;Necesita paz? Cristo es paz.</p>

<p>&iquest;Necesita paciencia? Cristo es paciencia. &iquest;Necesita sabidur&iacute;a? Cristo es sabidur&iacute;a.</p>

<p>&iquest;Necesita posesiones materiales para servir mejor a Cristo? Ellas est&aacute;n disponibles en &Eacute;l. &Eacute;l es due&ntilde;o de todos los animales en las colinas. Yo le recuerdo Su promesa de suplir las necesidades de todos los que conf&iacute;an en &Eacute;l.</p>

<p>El cristianismo es Cristo, y usted est&aacute; completo en &Eacute;l. Le proveer&aacute; todo lo que usted necesita.</p>

<p>Un estudio cuidadoso de la ep&iacute;stola a los Romanos, especialmente de los primeros ocho cap&iacute;tulos, puede tener un impacto revolucionario en la vida de cualquiera que busque sinceramente la verdad. Romanos 6 nos recuerda&nbsp;especialmente cuatro verdades:</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary6" class="summary"><h3>+ 1. No estamos m&aacute;s bajo el control del pecado.</h3></div>
<div class="collapsed" id ="Text6">
<!-- end default revealSummary -->
<p>Nuestros antiguos deseos perversos fueron clavados con &Eacute;l en la cruz. La parte de usted que ama el pecado fue aniquilada y mortalmente herida, de modo que su cuerpo que ama el pecado no est&aacute; m&aacute;s bajo el control del pecado. Nunca m&aacute;s ser&aacute; esclavo del pecado; porque como usted ha muerto al pecado, est&aacute; libre de su seducci&oacute;n y su poder sobre usted.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary7" class="summary"><h3>+ 2. Nosotros estamos vivos para Dios.</h3></div>
<div class="collapsed" id ="Text7">
<!-- end default revealSummary -->
<p>Por lo tanto, considere su vieja naturaleza pecaminosa como muerta e insensible al pecado y, por consecuencia, viva para Dios.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary8" class="summary"><h3>+ 3. Nosotros debemos darnos completamente a Dios.</h3></div>
<div class="collapsed" id ="Text8">
<!-- end default revealSummary -->
<p>No permita que ninguna parte de su cuerpo sea un instrumento de maldad usado para pecar; sino d&eacute;se usted mismo a Dios completamente - cada parte de usted, porque usted ha vuelto de la muerte, y usted quiere ser instrumento en las manos de Dios y ser usado por &Eacute;l en Su prop&oacute;sito.</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary9" class="summary"><h3>+ 4. Nosotros debemos obedecer a Dios</h3></div>
<div class="collapsed" id ="Text9">
<!-- end default revealSummary -->
<p>&iquest;Se da cuenta de que usted puede escoger su propio amo? Usted puede escoger el pecado (y la muerte) o tambi&eacute;n la obediencia (y el perd&oacute;n). Aquel a quien usted se ofrezca, lo tomar&aacute; y ser&aacute; su amo, y usted ser&aacute; su esclavo</p>

<p>Un d&iacute;a mi esposa Vonette y yo est&aacute;bamos caminando por un arroyo poco profundo en el Parque Yosemite, con nuestros dos hijos. Como las piedras eran resbalosas, yo estaba sosteniendo de la mano a nuestro hijo de cinco a&ntilde;os, Brad, para que no se resbalara. Repentinamente Brad resbal&oacute; en una de las piedras y sus pies se deslizaron con su peso. Hubiera tenido una ca&iacute;da seria y se habr&iacute;a lastimado si yo no lo hubiera sostenido firmemente hasta que recobr&oacute; el equilibrio. Cuando continuamos nuestra caminata, me mir&oacute; con una expresi&oacute;n radiante de gratitud y me dijo, &ldquo;Papi, estoy muy contento porque me salvaste de caer.&rdquo;</p>

<p>En ese preciso instante, sent&iacute; que Dios me hab&iacute;a hablado, y le dije, &ldquo;Padre, estoy muy contento porque T&uacute; me sostienes con tu mano. Cu&aacute;ntas veces me has librado de caer&rdquo; &iexcl;Esta vida cristiana es maravillosa! &iexcl;Es emocionante! Est&aacute; llena de aventura para los que obedecen a Dios y le permiten controlar sus vidas, para los que caminan con &Eacute;l momento a momento, d&iacute;a tras d&iacute;a, permiti&eacute;ndole &ldquo;sostener su mano.&rdquo;</p>

<p>Esta caminata personal e &iacute;ntima con Cristo nuestro Salvador y nuestro amigo es el cristianismo; no el esfuerzo, la tensi&oacute;n, el trabajo y la autodisciplina en la carne, que son usualmente las caracter&iacute;sticas del cristiano promedio mal informado. Si usted desea caminar en el Esp&iacute;ritu, est&eacute; seguro de conocer los recursos de que dispone como hijo de Dios, para que pueda decir con el ap&oacute;stol Pablo, &ldquo;Todo lo puedo en Cristo que me fortalece.&rdquo;</p>

</div>

<!-- begin default revealSummary -->
<div id="Summary10" class="summary"><h2>+ VIVA POR FE</h2></div>
<div class="collapsed" id ="Text10">
<!-- end default revealSummary -->
<p>Caminar en el Esp&iacute;ritu, es vivir una vida de fe. Dios nos cre&oacute; con la capacidad de experimentar una amplia gama de sentimientos. Gracias a Dios por estos. Sin embargo, usted no puede depender de los sentimientos para dar validez a su caminar con el Se&ntilde;or Jes&uacute;s. Las emociones v&aacute;lidas son el resultado de la fe y la obediencia.</p>

<p>Aunque los sentimientos ocupan un lugar en nuestras vidas, Dios no quiere que est&eacute;n por encima de nuestra fe en su Palabra. &Eacute;l buscar una experiencia emocional va en contra del mandato de caminar por fe y es, en realidad, un insulto a Dios. Permita que las emociones encuentren su lugar apropiado en su relaci&oacute;n con Cristo.</p>

<p>Juan 14:21 indica que el camino m&aacute;s v&aacute;lido para tener una experiencia emocional es ser obediente a Cristo. Uno de los mayores actos de obediencia es hablar de Cristo con otros en el poder del Esp&iacute;ritu Santo. As&iacute; como &Eacute;l vino a buscar y salvar a los perdidos y le ha encomendado testificar de &Eacute;l, nada podr&iacute;a agradar m&aacute;s al Se&ntilde;or que eso. Si usted quiere experimentar a Cristo de forma din&aacute;mica, v&aacute;lida y emocionante, comience a hablar de Cristo con otros como un h&aacute;bito.</p>

<p>Para caminar en el Esp&iacute;ritu usted debe vivir de acuerdo a las promesas de Dios, confiando en la absoluta integridad de Dios. La fe debe tener un objeto, y el objeto de su fe es Dios, revelado por medio de Su Palabra. Dios ha probado&nbsp;ser digno de nuestra confianza. En la Palabra de Dios hay miles de promesas para usted, y nunca se ha encontrado una que no sea verdadera. Cuando Dios diga algo, usted puede confiar su vida en ello y puede estar seguro de que &Eacute;l no le fallar&aacute;.</p>

<p>En Romanos 8:28 Pablo escribe, &ldquo;Sabemos que Dios obra en todo para el beneficio de quienes lo aman.&rdquo; &iquest;Cree usted esta promesa de la Palabra de Dios? Si la cree, usted l&oacute;gicamente reconoce el muy razonable mandato de Dios en 1 Tesalonicenses 5:18: &ldquo;Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jes&uacute;s.&rdquo;</p>

<address>Caminar en el Esp&iacute;ritu, es vivir una vida de fe. Dios nos cre&oacute; con la capacidad de experimentar una amplia gama de sentimientos. Gracias a Dios por estos. Sin embargo, usted no puede depender de los sentimientos para dar validez a su caminar con el Se&ntilde;or Jes&uacute;s. Las emociones v&aacute;lidas son el resultado de la fe y la obediencia.</address>

<p>&iquest;Ha aprendido usted a decir, &laquo;Gracias Se&ntilde;or&raquo; cuando su coraz&oacute;n est&aacute; dolido por la p&eacute;rdida de un ser querido? &iquest;Le agradece a Dios cuando su cuerpo est&aacute; agobiado de dolor? &iquest;Cuando recibe una carta que termina una relaci&oacute;n amorosa? &iquest;Cuando sufre reveses financieros? &iquest;Cu&aacute;ndo fracasa en un examen? &iquest;Cuando no tiene trabajo?</p>

<p>&iquest;Agradece a Dios cuando usted es discriminado, religiosa o racialmente?</p>

<p>Usted puede decir que s&oacute;lo un tonto dar&iacute;a gracias a Dios en tales circunstancias. No, si usted sabe que &ldquo;Todas las cosas ayudan a bien a aquellos que le aman.&rdquo; Si Dios nos ordena dar gracias, hay una raz&oacute;n para ello. Es una de las lecciones m&aacute;s emocionantes que yo he aprendido, la lecci&oacute;n de poder decir &ldquo;gracias&rdquo; a pesar de que las cosas vayan mal.</p>

<p>Antes de hacer este descubrimiento, yo sol&iacute;a perder la paciencia cuando las cosas iban contrarias a mis deseos. A menudo abr&iacute;a por la fuerza, puertas que estaban cerradas. Si ellas no se abr&iacute;an ante m&iacute;, yo trataba de romperlas. Con frecuencia andaba tenso e impaciente con los dem&aacute;s. Luego descubr&iacute; cu&aacute;n equivocado estaba.</p>

<p>Tr&aacute;gicamente nosotros da&ntilde;amos a nuestros hermanos con nuestra impaciencia, con nuestra cr&iacute;tica, con nuestra falta de reflexi&oacute;n; y cuando los cristianos act&uacute;an as&iacute;, todo el Cuerpo de Cristo sufre.</p>

<p>Pero Dios nos ha dado un plan mejor. Usted puede estar tranquilo. Usted puede decir &ldquo;gracias&rdquo; cuando todo el mundo est&aacute; derrumb&aacute;ndose a su alrededor, porque su Dios, es Soberano y Omnipotente. &Eacute;l tiene al mundo en Sus manos, y usted puede confiar en &Eacute;l. &Eacute;l le ama y le ha prometido pelear por usted.</p>

<p>&Eacute;l le ha ordenado descargar todas sus preocupaciones en &Eacute;l porque &Eacute;l tiene cuidado de usted. &Eacute;l visit&oacute; personalmente este mundo, y llev&oacute; sus pecados sobre s&iacute;. El quiere bendecirlo y usarlo, pero no lo bendecir&aacute; ni lo usar&aacute;, si usted est&aacute; preocupado o duda de sus promesas. &Eacute;l no lo bendecir&aacute; ni lo usar&aacute; si usted se lamenta, critica a otros o encuentra fallas en todo.</p>

<p>Hace alg&uacute;n tiempo, una se&ntilde;orita vino a nuestra oficina central para tomar uno de nuestros seminarios de capacitaci&oacute;n. Despu&eacute;s de una de mis conferencias, ella se me acerc&oacute; para pedir consejo. Entre l&aacute;grimas, me comparti&oacute; c&oacute;mo su amigo m&aacute;s querido hab&iacute;a muerto en un accidente. Volv&iacute;an a casa despu&eacute;s de su fiesta de compromiso, y otro autom&oacute;vil que ven&iacute;a, cruz&oacute; la l&iacute;nea central forz&aacute;ndola a salir de la carretera chocando contra un poste de tel&eacute;fono.</p>

<p>La tragedia era mayor por la culpa que ella sent&iacute;a pues ella conduc&iacute;a el auto. Su coraz&oacute;n estaba destrozado.</p>

<p>&ldquo;&iquest;Qu&eacute; har&eacute;?&rdquo;, suplic&oacute;.</p>

<p>Hab&iacute;an pasado algunos meses y hab&iacute;a ido ya a consultar psiquiatras, psic&oacute;logos, ministros y a muchos otros en busca de consejo. Ella dijo, &ldquo;Si usted no puede ayudarme, creo que nunca sanar&eacute;.&rdquo;</p>

<p>Le pregunt&eacute; si ella era cristiana, y luego de algunos comentarios me dijo, &ldquo;s&iacute;.&rdquo;</p>

<p>Le&iacute;mos juntos Romanos 8:28 y yo le pregunt&eacute;, &ldquo;&iquest;Cree usted que todas las cosas suceden para bien?&rdquo;</p>

<p>Ella dijo; &ldquo;S&iacute;, lo creo.&rdquo;</p>

<p>Fuimos a 1 Tesalonicenses 5:18. Lo ley&oacute; en voz alta: &ldquo;Dad gracias en todo, porque esa es la voluntad de Dios para&nbsp;con nosotros en Cristo Jes&uacute;s.&rdquo;</p>

<p>Yo le dije, &ldquo;&iquest;Ha agradecido a Dios desde la p&eacute;rdida de su querido amigo?&rdquo; Ella qued&oacute; muy sorprendida y apenas pod&iacute;a creer lo que escuchaba. Mir&aacute;ndome con incredulidad, me dijo, &ldquo;&iquest;C&oacute;mo puedo agradecer a Dios cuando he experimentado una p&eacute;rdida tan grande?&rdquo;</p>

<p>&ldquo;Usted conf&iacute;a en Dios, &iquest;no es cierto?&rdquo; -le pregunt&eacute;. &ldquo;S&iacute;, conf&iacute;o en Dios&rdquo;, -insisti&oacute;.</p>

<p>&ldquo;Entonces, &iquest;por qu&eacute; no se lo demuestra?&rdquo; -le pregunt&eacute;.</p>

<p>&ldquo;Yo s&eacute; que al principio ser&aacute; dif&iacute;cil e incluso puede parecer rid&iacute;culo, pero ore y d&iacute;gale a Dios que conf&iacute;a en &Eacute;l y agrad&eacute;zcale por todo, a pesar de que su coraz&oacute;n est&aacute; destrozado.&rdquo;</p>

<p>Cuando nos arrodillamos juntos, ella or&oacute; con muchas l&aacute;grimas, &ldquo;Dios, no entiendo por qu&eacute; mi amigo m&aacute;s querido muri&oacute;, pero s&eacute; que puedo confiar en ti, y hoy te doy gracias.&rdquo;</p>

<p>Cuando ella dijo, &ldquo;Gracias&rdquo;, le estaba diciendo a Dios, &ldquo;Confiar&eacute; en ti.&rdquo; La Biblia dice que sin fe es imposible agradar a Dios, y la mejor forma de demostrar fe es diciendo, &ldquo;Gracias.&rdquo; Usted puede pensar que hasta odia a Dios porque ha perdido a un ser querido, una herencia, su dinero, su negocio o su salud. Tal vez se pregunte, &ldquo;&iquest;Por qu&eacute; Dios me hace esto?&rdquo; pero Dios dice, &ldquo;Dad gracias en toda circunstancia.&rdquo;</p>

<p>A la ma&ntilde;ana siguiente la joven volvi&oacute; a mi oficina rebosando de gozo y dijo, Anoche dorm&iacute; sin medicinas por primera vez desde el accidente. Esta ma&ntilde;ana cuando despert&eacute; mi coraz&oacute;n estaba lleno de alabanza y agradecimiento a Dios. Yo no puedo comprenderlo, pero s&eacute; que esto tiene relaci&oacute;n, lo que usted me ense&ntilde;&oacute; anoche acerca de decir &ldquo;Gracias a Dios.&rdquo;</p>

<p>Podr&iacute;a relatar cientos de historias similares acerca de cristianos cuyas vidas han sido transformadas al aprender la lecci&oacute;n tan sencilla de decir &ldquo;gracias&rdquo; en todo.</p>

<p>Hace algunos a&ntilde;os nosotros necesit&aacute;bamos desesperadamente m&aacute;s de medio mill&oacute;n de d&oacute;lares para la compra del Hotel Arrowhead Springs, la oficina central de la Cruzada Estudiantil y Profesional para Cristo Internacional. El futuro de nuestro ministerio mundial estaba en riesgo debido a un tecnicismo. Nuestra posici&oacute;n financiera hab&iacute;a tomado un giro tr&aacute;gico y parec&iacute;a que no hab&iacute;a esperanza. Todo el Ministerio estaba en peligro de ser destruido y mi propia reputaci&oacute;n ser&iacute;a da&ntilde;ada.</p>

<p>Cuando un amigo me dijo que el dinero que nos hab&iacute;an prometido no estaba disponible, ca&iacute; de rodillas y dije, &ldquo;&iquest;Se&ntilde;or, qu&eacute; hago?&rdquo; Abr&iacute; mi Biblia buscando ayuda y seguridad. Record&eacute; que todas las cosas obran para bien para aquellos que aman a Dios, que sin fe es imposible agradar a Dios, y que el justo por la fe vivir&aacute;. Le&iacute; el mandato de Dios de dar gracias en todo.</p>

<address>El privilegio m&aacute;s grande de la vida es aprender a confiar en Dios. Aprender a caminar por fe. Yo todav&iacute;a estoy aprendiendo y tengo confianza de que un d&iacute;a podr&eacute; confiar en Dios por cosas infinitamente m&aacute;s grandes que aquellas que ahora puedo confiarle.</address>

<p>Entonces agradec&iacute; a Dios, a pesar de lo que hab&iacute;a pasado. Le agradec&iacute; en medio de mis l&aacute;grimas. Le agradec&iacute; que en Su sabidur&iacute;a y amor, &Eacute;l sab&iacute;a mejor que yo lo que deber&iacute;a hacerse y que despu&eacute;s de este caos e incertidumbre, vendr&iacute;a una soluci&oacute;n milagrosa para nuestro problema.</p>

<p>Cuando estaba arrodillado y mientras daba gracias a pesar de la desilusi&oacute;n que sent&iacute;a, Dios comenz&oacute; a darme una seguridad genuina de que realmente iba a suceder un milagro. En diez d&iacute;as Dios provey&oacute; una soluci&oacute;n inesperada a nuestro problema, un verdadero milagro. Nos demostr&oacute; una vez m&aacute;s que cuando confiamos en &Eacute;l, &Eacute;l es fiel y digno de nuestra confianza.</p>

<p>El privilegio m&aacute;s grande de la vida es aprender a confiar en Dios. Aprender a caminar por fe. Yo todav&iacute;a estoy aprendiendo y tengo confianza de que un d&iacute;a podr&eacute; confiar en Dios por cosas infinitamente m&aacute;s grandes que aquellas que ahora puedo confiarle.</p>

<p>&iexcl;Qu&eacute; oportunidad tan grande la que tenemos de caminar con el Rey de reyes cada momento de cada d&iacute;a en nuestras vidas, desde que nos levantamos en la ma&ntilde;ana hasta que nos acostamos por la noche!</p>

<p>Por muchos a&ntilde;os mi pr&aacute;ctica diaria ha sido comenzar y terminar el d&iacute;a recordando el amor y la fidelidad de&nbsp;nuestro maravilloso Se&ntilde;or, en especial antes de acostarme por la noche. As&iacute;, a trav&eacute;s del descanso nocturno, cuando mi subconsciente es el que trabaja, estoy tambi&eacute;n pensando en Cristo. Cuando despierto por la ma&ntilde;ana, mis primos pensamientos son para &Eacute;l.</p>

<p>Generalmente me despierto con un salmo de alabanza en mis labios y con una actitud de agradecimiento. &ldquo;Oh Se&ntilde;or, te doy gracias porque te pertenezco. Te agradezco porque vives en m&iacute;, y te agradezco porque perdonaste mis pecados. Te doy gracias porque soy tu hijo.&rdquo;</p>

<p>&ldquo;Ahora, al comenzar este d&iacute;a, y durante todo el d&iacute;a, te invito a utilizar mi cuerpo, a amar con mi coraz&oacute;n, a hablar con mis labios y a pensar con mi mente. Te doy gracias porque durante el transcurso de este d&iacute;a t&uacute; prometiste hacer a trav&eacute;s de m&iacute;, a&uacute;n mayores cosas que las que t&uacute; hiciste cuando estabas aqu&iacute; en la tierra. Por fe, apropio tu grandeza, tu poder, tu autoridad en mi vida y te invito a que hoy hagas lo que desees en m&iacute; y a trav&eacute;s de m&iacute;.&rdquo; Aunque las palabras de mi oraci&oacute;n diaria var&iacute;en, mi compromiso contigo sigue siendo el mismo.</p>

<p>Ahora procuro comenzar cada d&iacute;a arrodill&aacute;ndome como un acto de reconocimiento de su Se&ntilde;or&iacute;o. Busco comenzar el d&iacute;a caminando en la llenura de Su poder. &iquest;Qu&eacute; aventura aguarda a los que conf&iacute;an en el Se&ntilde;or!</p>

<p>En resumen, le recuerdo que si usted desea caminar momento a momento, d&iacute;a a d&iacute;a, en la llenura y poder del Esp&iacute;ritu de Dios, usted debe</p>

<ol>
	<li>Estar seguro de que est&aacute; lleno con el Esp&iacute;ritu por fe, en base al mandato de Dios de ser lleno y reclamando su<strong> promesa</strong> de que si usted pide de acuerdo a Su voluntad, &Eacute;l oir&aacute; y responder&aacute;.</li>
	<li>Estar preparado para el conflicto espiritual contra el mundo, la carne y el diablo.</li>
	<li>Conocer sus recursos como hijo de Dios. Su fortaleza debe venir del Se&ntilde;or. Usted debe permanecer en &Eacute;l.</li>
	<li>Vivir por fe, apropi&aacute;ndose diariamente del poder de nuestro Se&ntilde;or Jesucristo, Su fortaleza y Su amor, dando gracias por todo y en toda circunstancia.</li>
</ol>

<p>&iquest;Por qu&eacute; un cristiano debe caminar siempre en la llenura y el control del Esp&iacute;ritu Santo momento a momento, como un h&aacute;bito permanente en la vida? Hay muchas razones importantes: agradar y honrar al Se&ntilde;or, quien se deleita en la comuni&oacute;n con sus hijos; gozar de una vida m&aacute;s rica, plena y emocionante con nuestro Salvador y con otros; y ser m&aacute;s fruct&iacute;fero en su testimonio acerca de su Salvador.</p>

<p>El presentar a Cristo a otros como una expresi&oacute;n de gratitud y como un acto de obediencia al Se&ntilde;or, es el resultado natural de caminar en la llenura del Esp&iacute;ritu Santo.</p>

<p>Ya que todo cristiano recibi&oacute; la orden de ser testigo de nuestro Se&ntilde;or Jesucristo, el no hacerlo y el no comprometerse en la evangelizaci&oacute;n, es un acto de desobediencia e indica que el cristiano no est&aacute; caminando en el control del Esp&iacute;ritu Santo.</p>

<p>Conforme usted camina en el Esp&iacute;ritu y aplica fielmente el concepto revolucionario de la Respiraci&oacute;n Espiritual, usted tambi&eacute;n llegar&aacute; a ser parte de la gran multitud de disc&iacute;pulos fruct&iacute;feros que Dios est&aacute; levantando en todo el mundo para trabajar, planificar, orar y testificar de Jesucristo, y as&iacute; ayudar en el cumplimiento de la Gran Comisi&oacute;n en esta generaci&oacute;n.</p>

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

			<td class="social" @click="share('lesson', '¿CÓMO  CAMINAR EN  EL ESPÍRITU  SANTO?: ', '/content/M2/spa/tc/tc04.html')">
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