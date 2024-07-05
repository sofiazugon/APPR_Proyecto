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
            <div class="hestia-blog-content">
                <div class="card card-plain card blog">
                <?php 
			$paged= get_query_var('pg');
            $args = [
                'post_type' => 'comic',
                'post_per_page' => 10,
                'paged'=> $paged,
            ];
				?>
                </div>
            </div>
            <?php 
			$paged= get_query_var('pg');
            $args = [
                'post_type' => 'comic',
                'post_per_page' => 10,
                'paged'=> $paged,
            ];
				?>
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

<?php
if ( ! is_singular( 'elementor_library' ) ) {
	do_action( 'hestia_blog_related_posts' );
}
?>
<?php get_footer(); ?>
