document.getElementById('mail').addEventListener('submit', async (event) => {
    event.preventDefault(); // Ngăn trình duyệt gửi form theo cách mặc định
  
    // Lấy giá trị từ form
    const name = document.getElementById('name').value;
    const content = document.getElementById('content').value;
  
    // Định nghĩa payload gửi đi
    const payload = {
      name: name,
      content: content,
    };
  
    try {
      // Gửi yêu cầu tới backend
      const response = await fetch('http://localhost:8080/thuthoi/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      // Xử lý kết quả phản hồi từ backend
      if (response.ok) {
        const result = await response.json();
        alert('Góp ý của bạn đã được gửi thành công!');
        console.log('Phản hồi từ server:', result);
      } else {
        const error = await response.json();
        alert('Gửi góp ý thất bại. Vui lòng thử lại!');
        console.error('Lỗi từ server:', error);
      }
    } catch (err) {
      // Xử lý lỗi khi gọi API
      console.error('Lỗi khi kết nối tới server:', err);
      alert('Không thể gửi góp ý. Vui lòng kiểm tra kết nối mạng của bạn!');
    }
  });
  