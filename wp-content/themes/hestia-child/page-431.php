<?php
/**
 * The template for displaying all single posts and attachments.
 *
 * @package Hestia
 * @since Hestia 1.0
 */

get_header();

do_action( 'hestia_before_single_post_wrapper' );
?>

<div class="<?php echo hestia_layout(); ?>">
 <div class="blog-post blog-post-wrapper">
  <div class="container">

  <div class="col-md-8 page-content-wrap  col-md-offset-2">
				
				<p class="has-medium-font-size padding-top"><strong>SPANISH SECTION</strong> / Currently comic available in Spanish only.</p>
				
				
				
				<p class="has-text-align-center has-x-large-font-size" style="font-style:italic;font-weight:400"><strong>EN ESTA VIDA</strong></p>
				
				
				
				<p class="has-text-align-left" style="font-style:italic;font-weight:400">“Las almas son libres de elegir su camino a través del Universo hasta cumplir con las vidas que les toque y trascender en su crecimiento inimaginable.”</p>
				
				
				
				<p class="has-text-align-left"><br>Hered Nonomi es un jóven Liberador de palabras directas, que en medio de su peregrinaje busqueda de liberar maldiciones y demonios, protegiendo a las personas inconscientes y mejoraramiento de sus habilidades, se encuentra con un muchacho que dice llamarse Siro Kaera, cuyo aspecto es extrañamente fornido y posee un extraño comportamiento pero con una personalidad libre y amable.<br><br>Las leyendas dicen que los demonios son almas que quisieron volver a vivir antes del tiempo en que les correspondía, y fueron enviados al espacio físico por el Universo, como seres inmortales carentes de los 5 sentidos que poseen las bestias (animales y humanos) para sobrellevar su existencia en la Tierra y que deben robar las bendiciones (alguno de los 5 sentidos) a otras criaturas, para poder sentirse vivos de nuevo.</p>
					
				<div class="wp-block-group is-vertical is-layout-flex wp-container-core-group-layout-1 wp-block-group-is-layout-flex">
				</div>
				</div>
				<div class="hestia-blog-content">
                <div class="card card-plain card blog">
					<?php 
				$paged= get_query_var('pg');
							$args = [
								'post_type' => 'Comic',
								'post_per_page' => 10,
								'paged'=> $paged,
							];
							$query = new WP_Query($args)
					?>
								</div>
							</div>
				<div>
						<ul>
							<?php
							while ($query->have_posts()) {
								$query->the_post();
								?>
								<li class="card">
									<a href="<?php the_permalink(); ?>">
										<?php echo get_the_post_thumbnail($post->ID, 'medium'); ?>
										<div class="container">
											<h2><?php the_title(); ?></h2>
										</div>
									</a>
								</li>
								<?php
							}
							wp_reset_postdata();
							?>
						</ul>
					</div>
					<div class="pagination">
						<ul>
							<?php
							echo paginate_links(
								array(
									'total' => $query->max_num_pages,
									'current' => $paged,
									'format' => '?paged=%#%',
								)
							);
							?>
						</ul>
					</div>
					<?php
					if ( have_posts() ) :
						while ( have_posts() ) :
						the_post();
						get_template_part( 'template-parts/content', 'Comic' );
						endwhile;
						else :
						get_template_part( 'template-parts/content', 'none' );
					endif;
						?> 
				</div>
				</div>
				
				
							</div>
  
   
           
	    

  </div>
 </div>
</div>

<?php
if ( ! is_singular( 'elementor_library' ) ) {
 do_action( 'hestia_blog_related_posts' );
}
?>