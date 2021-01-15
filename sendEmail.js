/**
 * @param {array} emails 
 */
function notifyByEmail(emails) {

    if(validateEmailAddress(emails)){
     MailApp.sendEmail({
       to: emails.join(', '),
       subject: "Notificacion",
       htmlBody: "inline Google Logo<img src='cid:googleLogo'> images! <br>" +
         "inline YouTube Logo <img src='cid:youtubeLogo'>",
       inlineImages:
       {
         googleLogo: googleLogoBlob,
         youtubeLogo: youtubeLogoBlob
       }
     });
    } ;
   }
   
   
   function validateEmailAddress(emails) {
     let valid = true;
     emails.forEach(email => {
       const re = /\S+@\S+\.\S+/;
       if (!re.test(email)) {
         valid = false;
       }
     })
     return valid;
   }
   
   
   /**
    *a collection of the courses that belong tho this coordinator 
    * param {object:{ centerName, coordinator, classrooms:{section, code, name}} center
    */
   function htmlMessage(center){
   
     function createRowPerClassroom (classrooms){
       let rows = "";
       classrooms.forEach(classroom=>{
         rows = rows + ` <tr class="c8">
             <td class="c3" colspan="1" rowspan="1">
               <p class="c5"><span class="c6">
               ${classroom.name}
               </span></p>
             </td>
             <td class="c16" colspan="1" rowspan="1">
               <p class="c5"><span class="c6">
                ${classroom.section}
               </span></p>
             </td>
             <td class="c18" colspan="1" rowspan="1">
               <p class="c5"><span class="c6">
                 ${classroom.code}
               </span></p>
             </td>
             <td class="c10" colspan="1" rowspan="1">
               <p class="c5">
                 <span class="c7">(INSERTAR NOMBRE DEL MAESTRO QUE ASIGNO)</span>
               </p>
             </td>
           </tr>`;
       })
       return rows;
     }
   
     return `<html><head>
       <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
       <style type="text/css">
         .lst-kix_myhiv6l16a9o-2 > li:before {
           content: "\0025a0  ";
         }
         .lst-kix_lnz25jr6rq8y-8 > li:before {
           content: "\0025a0  ";
         }
         .lst-kix_myhiv6l16a9o-1 > li:before {
           content: "\0025cb  ";
         }
         .lst-kix_myhiv6l16a9o-5 > li:before {
           content: "\0025a0  ";
         }
         .lst-kix_lnz25jr6rq8y-5 > li:before {
           content: "\0025a0  ";
         }
         .lst-kix_myhiv6l16a9o-4 > li:before {
           content: "\0025cb  ";
         }
         .lst-kix_lnz25jr6rq8y-6 > li:before {
           content: "\0025cf  ";
         }
         .lst-kix_lnz25jr6rq8y-7 > li:before {
           content: "\0025cb  ";
         }
         .lst-kix_myhiv6l16a9o-3 > li:before {
           content: "\0025cf  ";
         }
         ul.lst-kix_myhiv6l16a9o-5 {
           list-style-type: none;
         }
         ul.lst-kix_myhiv6l16a9o-4 {
           list-style-type: none;
         }
         ul.lst-kix_myhiv6l16a9o-3 {
           list-style-type: none;
         }
         ul.lst-kix_myhiv6l16a9o-2 {
           list-style-type: none;
         }
         ul.lst-kix_lnz25jr6rq8y-8 {
           list-style-type: none;
         }
         ul.lst-kix_myhiv6l16a9o-1 {
           list-style-type: none;
         }
         ul.lst-kix_myhiv6l16a9o-0 {
           list-style-type: none;
         }
         ul.lst-kix_lnz25jr6rq8y-6 {
           list-style-type: none;
         }
         ul.lst-kix_lnz25jr6rq8y-7 {
           list-style-type: none;
         }
         ul.lst-kix_lnz25jr6rq8y-4 {
           list-style-type: none;
         }
         .lst-kix_myhiv6l16a9o-6 > li:before {
           content: "\0025cf  ";
         }
         ul.lst-kix_lnz25jr6rq8y-5 {
           list-style-type: none;
         }
         ul.lst-kix_lnz25jr6rq8y-2 {
           list-style-type: none;
         }
         ul.lst-kix_lnz25jr6rq8y-3 {
           list-style-type: none;
         }
         ul.lst-kix_lnz25jr6rq8y-0 {
           list-style-type: none;
         }
         .lst-kix_myhiv6l16a9o-8 > li:before {
           content: "\0025a0  ";
         }
         ul.lst-kix_lnz25jr6rq8y-1 {
           list-style-type: none;
         }
         ul.lst-kix_myhiv6l16a9o-8 {
           list-style-type: none;
         }
         .lst-kix_myhiv6l16a9o-7 > li:before {
           content: "\0025cb  ";
         }
         ul.lst-kix_myhiv6l16a9o-7 {
           list-style-type: none;
         }
         ul.lst-kix_myhiv6l16a9o-6 {
           list-style-type: none;
         }
         li.li-bullet-0:before {
           margin-left: -18pt;
           white-space: nowrap;
           display: inline-block;
           min-width: 18pt;
         }
         .lst-kix_lnz25jr6rq8y-0 > li:before {
           content: "\0025cf  ";
         }
         .lst-kix_lnz25jr6rq8y-1 > li:before {
           content: "\0025cb  ";
         }
         .lst-kix_lnz25jr6rq8y-4 > li:before {
           content: "\0025cb  ";
         }
         .lst-kix_myhiv6l16a9o-0 > li:before {
           content: "\0025cf  ";
         }
         .lst-kix_lnz25jr6rq8y-2 > li:before {
           content: "\0025a0  ";
         }
         .lst-kix_lnz25jr6rq8y-3 > li:before {
           content: "\0025cf  ";
         }
         ol {
           margin: 0;
           padding: 0;
         }
         table td,
         table th {
           padding: 0;
         }
         .c16 {
           border-right-style: solid;
           padding: 5pt 5pt 5pt 5pt;
           border-bottom-color: #000000;
           border-top-width: 1pt;
           border-right-width: 1pt;
           border-left-color: #000000;
           vertical-align: top;
           border-right-color: #000000;
           border-left-width: 1pt;
           border-top-style: solid;
           border-left-style: solid;
           border-bottom-width: 1pt;
           width: 112.5pt;
           border-top-color: #000000;
           border-bottom-style: solid;
         }
         .c3 {
           border-right-style: solid;
           padding: 5pt 5pt 5pt 5pt;
           border-bottom-color: #000000;
           border-top-width: 1pt;
           border-right-width: 1pt;
           border-left-color: #000000;
           vertical-align: top;
           border-right-color: #000000;
           border-left-width: 1pt;
           border-top-style: solid;
           border-left-style: solid;
           border-bottom-width: 1pt;
           width: 119.2pt;
           border-top-color: #000000;
           border-bottom-style: solid;
         }
         .c10 {
           border-right-style: solid;
           padding: 5pt 5pt 5pt 5pt;
           border-bottom-color: #000000;
           border-top-width: 1pt;
           border-right-width: 1pt;
           border-left-color: #000000;
           vertical-align: top;
           border-right-color: #000000;
           border-left-width: 1pt;
           border-top-style: solid;
           border-left-style: solid;
           border-bottom-width: 1pt;
           width: 99.8pt;
           border-top-color: #000000;
           border-bottom-style: solid;
         }
         .c18 {
           border-right-style: solid;
           padding: 5pt 5pt 5pt 5pt;
           border-bottom-color: #000000;
           border-top-width: 1pt;
           border-right-width: 1pt;
           border-left-color: #000000;
           vertical-align: top;
           border-right-color: #000000;
           border-left-width: 1pt;
           border-top-style: solid;
           border-left-style: solid;
           border-bottom-width: 1pt;
           width: 110.2pt;
           border-top-color: #000000;
           border-bottom-style: solid;
         }
         .c4 {
           margin-left: 72pt;
           padding-top: 0pt;
           padding-left: 0pt;
           padding-bottom: 0pt;
           line-height: 1.5;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         .c7 {
           color: #ff0000;
           font-weight: 400;
           text-decoration: none;
           vertical-align: baseline;
           font-size: 12pt;
           font-family: "Arial";
           font-style: normal;
         }
         .c6 {
           color: #000000;
           font-weight: 400;
           text-decoration: none;
           vertical-align: baseline;
           font-size: 12pt;
           font-family: "Arial";
           font-style: normal;
         }
         .c12 {
           padding-top: 0pt;
           padding-bottom: 12pt;
           line-height: 1.5;
           orphans: 2;
           widows: 2;
           text-align: left;
           height: 11pt;
         }
         .c0 {
           color: #346f19;
           font-weight: 400;
           text-decoration: none;
           vertical-align: baseline;
           font-size: 12pt;
           font-family: "Arial";
           font-style: normal;
         }
         .c2 {
           padding-top: 12pt;
           padding-bottom: 12pt;
           line-height: 1.15;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         .c17 {
           padding-top: 0pt;
           padding-bottom: 12pt;
           line-height: 1.5;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         .c15 {
           color: #000000;
           font-weight: 700;
           text-decoration: none;
           vertical-align: baseline;
           font-family: "Arial";
           font-style: normal;
         }
         .c5 {
           padding-top: 12pt;
           padding-bottom: 0pt;
           line-height: 1.15;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         .c9 {
           border-spacing: 0;
           border-collapse: collapse;
           margin-right: auto;
         }
         .c11 {
           background-color: #ffffff;
           max-width: 468pt;
           padding: 72pt 72pt 72pt 72pt;
         }
         .c1 {
           padding: 0;
           margin: 0;
         }
         .c20 {
           margin-left: 72pt;
           padding-left: 0pt;
         }
         .c19 {
           color: #346f19;
         }
         .c13 {
           font-size: 12pt;
         }
         .c14 {
           height: 39.2pt;
         }
         .c21 {
           font-weight: 700;
         }
         .c8 {
           height: 67.8pt;
         }
         .title {
           padding-top: 0pt;
           color: #000000;
           font-size: 26pt;
           padding-bottom: 3pt;
           font-family: "Arial";
           line-height: 1.15;
           page-break-after: avoid;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         .subtitle {
           padding-top: 0pt;
           color: #666666;
           font-size: 15pt;
           padding-bottom: 16pt;
           font-family: "Arial";
           line-height: 1.15;
           page-break-after: avoid;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         li {
           color: #000000;
           font-size: 11pt;
           font-family: "Arial";
         }
         p {
           margin: 0;
           color: #000000;
           font-size: 11pt;
           font-family: "Arial";
         }
         h1 {
           padding-top: 20pt;
           color: #000000;
           font-size: 20pt;
           padding-bottom: 6pt;
           font-family: "Arial";
           line-height: 1.15;
           page-break-after: avoid;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         h2 {
           padding-top: 18pt;
           color: #000000;
           font-size: 16pt;
           padding-bottom: 6pt;
           font-family: "Arial";
           line-height: 1.15;
           page-break-after: avoid;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         h3 {
           padding-top: 16pt;
           color: #434343;
           font-size: 14pt;
           padding-bottom: 4pt;
           font-family: "Arial";
           line-height: 1.15;
           page-break-after: avoid;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         h4 {
           padding-top: 14pt;
           color: #666666;
           font-size: 12pt;
           padding-bottom: 4pt;
           font-family: "Arial";
           line-height: 1.15;
           page-break-after: avoid;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         h5 {
           padding-top: 12pt;
           color: #666666;
           font-size: 11pt;
           padding-bottom: 4pt;
           font-family: "Arial";
           line-height: 1.15;
           page-break-after: avoid;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
         h6 {
           padding-top: 12pt;
           color: #666666;
           font-size: 11pt;
           padding-bottom: 4pt;
           font-family: "Arial";
           line-height: 1.15;
           page-break-after: avoid;
           font-style: italic;
           orphans: 2;
           widows: 2;
           text-align: left;
         }
       </style>
     </head>
     <body class="c11">
       <p class="c2"><span class="c6">&nbsp;</span></p>
       <p class="c2">
         <span class="c0">Estimado ${ center.coordinador||"coordinador/ encargado de centro"},</span>
       </p>
       <p class="c2">
         <span class="c0"
           >Despu&eacute;s de saludarle, queremos informarle que le acabamos de
           enviar la invitaci&oacute;n como coteacher a las aulas de Google
           Classroom que se utilizar&aacute;n en su centro, ${center.centerName}. Favor seguir las
           siguientes instrucciones.</span
         >
       </p>
       <p class="c2">
         <span class="c0"
           >1-acceptar la invitaci&oacute;n como coteacher (comaestro). Estas
           preceden a este correo en su bandeja de entrada; &nbsp;en ocasiones
           puede encontrarse dentro de los correos no deseados(Junk Mail).</span
         >
       </p>
       <p class="c2">
         <span class="c0"
           >2-Una vez dentro del aula virtual, proceda a asignar uno de sus
           maestros a esta aula, agreg&aacute;ndolo como
           coteacher(comaestro).</span
         >
       </p>
       <p class="c2">
         <span class="c0"
           >3-Notificar al maestro y confirmar que ya esta en el aula
           virtual.</span
         >
       </p>
       <p class="c2">
         <span class="c0"
           >4- escribir un correo a wmilanes@mescyt.gob.do, athomas@mescyt.gob.do,
           mpolanco@mescyt.gob.do &nbsp;y a su supervisor:</span
         >
       </p>
       <p class="c2">
         <span class="c0"
           >&nbsp; &nbsp; &nbsp; &nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ASUNTO: CONFIRMACION DE
           AULA</span
         >
       </p>
       <p class="c2">
         <span class="c0"
           >&nbsp; &nbsp; &nbsp; &nbsp;
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MENSAJE:</span
         >
       </p>
       <a id="t.e5226513be1d2801c5fedd98f79bfbda25deebd9"></a><a id="t.0"></a>
       <table class="c9">
         <tbody>
           <tr class="c14">
             <td class="c3" colspan="1" rowspan="1">
               <p class="c5"><span class="c15 c13">CENTRO</span></p>
             </td>
             <td class="c16" colspan="1" rowspan="1">
               <p class="c5"><span class="c13 c15">AULA</span></p>
             </td>
             <td class="c18" colspan="1" rowspan="1">
               <p class="c5"><span class="c15 c13">CODIGO</span></p>
             </td>
             <td class="c10" colspan="1" rowspan="1">
               <p class="c5"><span class="c15 c13">MAESTRO ASIGNADO</span></p>
             </td>
           </tr>
          ${createRowPerClassroom(center.classrooms)}
           
         </tbody>
       </table>
       <p class="c2"><span class="c6">&nbsp;</span></p>
       <p class="c2">
         <span class="c0"
           >5-Si por alguna raz&oacute;n no recibi&oacute; la invitaci&oacute;n de
           coteacher de alguna de las aulas mencionadas arriba, favor contactar a
           sus supervisor para que lo agregue con un correo electr&oacute;nico
           diferente, ya que este tambi&eacute;n es un coteacher.</span
         >
       </p>
       <p class="c2">
         <span class="c19 c13 c21">Nota:</span
         ><span class="c0"
           >&nbsp;si tiene alg&uacute;n inconveniente ya sea con su
           &nbsp;invitaci&oacute;n de coteacher o la que usted env&iacute;e a sus
           maestros favor tomar en cuenta &nbsp;que algunas veces ocurre un error
           cuando se env&iacute;a una invitaci&oacute;n de Google Classroom a
           algunos correos electr&oacute;nicos. Las posibles soluciones son:</span
         >
       </p>
       <ul class="c1 lst-kix_myhiv6l16a9o-1 start">
         <li class="c4 li-bullet-0">
           <span class="c0"
             >OPCION 1: Borrar la invitaci&oacute;n y enviarla una vez
             m&aacute;s.</span
           >
         </li>
         <li class="c4 li-bullet-0">
           <span class="c19 c13">&nbsp;</span
           ><span class="c0"
             >OPCION 2: Crear un nuevo correo electr&oacute;nico y enviar la
             invitaci&oacute;n a ese.</span
           >
         </li>
         <li class="c4 li-bullet-0">
           <span class="c13 c19"
             >OPCION 3: (no recomendable) Si se agotan las opciones siguientes,
             crear una copia del Google Classroom. Agregar como coteacher a ESTA
             DIRECCION DE CORREO, al maestro, y a su supervisor. &nbsp;Enviar un
             correo electr&oacute;nico a &nbsp;wmilanes@mescyt.gob.do,
             athomas@mescyt.gob.do, mpolanco@mescyt.gob.do &nbsp;y a su supervisor
             indicando el </span
           ><span class="c13"
             >NOBRE DEL CENTRO, &nbsp;NOMBRE DEL AULA, &nbsp; CODIGO, MAESTRO
             ASIGNADO</span
           ><span class="c0">.</span>
         </li>
         <li class="c17 c20 li-bullet-0">
           <span class="c19 c13">&nbsp;</span
           ><span class="c0"
             >OPCION 4: Si no funcionan ninguna de las anteriores, ponerse en
             contacto con su supervisor.</span
           >
         </li>
       </ul>
       <p class="c17"><span class="c0">Atentamente,</span></p>
       <p class="c17">
         <span class="c0">Equipo de logistica de aulas virtuales</span>
       </p>
       <p class="c12"><span class="c0"></span></p>
     </body>
   </html>`
   }