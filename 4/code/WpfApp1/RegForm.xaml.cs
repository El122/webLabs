using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WpfApp1
{
    /// <summary>
    /// Логика взаимодействия для RegForm.xaml
    /// </summary>
    public partial class RegForm : Window
    {
        public RegForm()
        {
            InitializeComponent();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            string fio = fioField.Text.ToString();
            string pass = pass1Field.Text.ToString();
            string pass2 = pass2Field.Text.ToString();

            if (fio == "")
            {
                MessageBox.Show("У вас нет имени");
            } else if (pass != pass2 || pass == "" || pass2 == "")
            {
                MessageBox.Show(fio + ", Вы ввели разные пароли или вообще ничего не ввели");
            } else
            {
                MessageBox.Show("Вы были успешно не зарегистрированы, потому что у нас нет БД");
            }

        }

        private void TextBox_TextChanged(object sender, TextChangedEventArgs e)
        {

        }

        private void TextBox_TextChanged_1(object sender, TextChangedEventArgs e)
        {

        }
    }
}
