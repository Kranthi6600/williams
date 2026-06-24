import Link from 'next/link';

export default function MenuWidget({ menuItems, menuHeading, variant }) {
  return (
    <>
      {menuHeading && <h4 className="cs-sidebar_widget_title">{menuHeading}</h4>}
      <ul
        className={`${
          variant ? `cs-menu_widget ${variant}` : 'cs-menu_widget cs-style1'
        } cs-mp0`}
      >
        {menuItems.map((item, index) => (
          <li key={index} style={{ marginBottom: '12px' }}>
            {item.href ? (
              <Link href={item.href} className="cs-recent_post_title cs-white_color">{item.title}</Link>
            ) : (
              <span className="cs-recent_post_title cs-white_color">{item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
